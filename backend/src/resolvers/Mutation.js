const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { promisify } = require('util');

const { transport, makeANiceEmail } = require('../mail');
const { hasPermission } = require('../utils')

const Mutations = {
    // ctx = context, we get this from createServer's context object
    async createItem(parent, args, ctx, info) {
        if(!ctx.request.userId) {
            throw new Error('You must be logged in to do that!');
        }
        const item = await ctx.db.mutation.createItem({
            data: {
                // This is how to create a relationship between types
                user: {
                    connect: {
                        id: ctx.request.userId
                    }
                },
                ...args
            }
        }, info);

        return item;
    },
    updateItem(parent, args, ctx, info) {
        // first take a copy of the updates
        const update = { ...args
        };
        // Remove the ID from updates
        delete updates.id;
        // Run the update method
        return ctx.db.mutation.updateItem({
            data: updates,
            where: {
                id: args.id,

            }
        }, info)
    },
    async deleteItem(parent, args, ctx, info) {
        const where = {
            id: args.id
        };
        // 1. find the item
        const item = await ctx.db.query.item({
            where
        }, `{ id title user { id }}`);
        // 2. Check if they own that item, or have the permissions
        const ownsItem = item.user.id === ctx.request.userId;
        const hasPermissions = ctx.request.user.permissions.some(permission => ['ADMIN', 'ITEMDELETE'].includes(permission));
        if (!ownsItem && !hasPermissions) {
            throw new Error('You don\'t have permission to do that!!!');
        }
        // 3. Delete it!
        return ctx.db.mutation.deleteItem({
            where
        }, info);
    },
    async signup(parent, args, ctx, info) {
        args.email = args.email.toLowerCase();
        // Hash their password
        const password = await bcrypt.hash(args.password, 10);
        // Create the user in database
        const user = await ctx.db.mutation.createUser({
            data: {
                ...args,
                password,
                permissions: {
                    set: ['USER']
                }
            }
        }, info);
        // Create a JWT token for new user so they don't have to login
        const token = jwt.sign({
            userId: user.id
        }, process.env.APP_SECRET);
        // We set the JWT as a cookie in the response
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        });
        // Return the user to browser
        return user;
    },
    async signin(parent, {
        email,
        password
    }, ctx, info) {
        // Check if there is a user with the provided email
        const user = await ctx.db.query.user({
            where: {
                email
            }
        });
        if (!user) {
            throw new Error(`No such user found for email ${email}`);
        }
        // Check if their password is correct
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new Error('Invalid password!');
        }
        // Generate the JWT token
        const token = jwt.sign({
            userId: user.id
        }, process.env.APP_SECRET);
        // Set the cookie with the token
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365
        })
        // Return the user
        return user;
    },
    signout(parent, args, ctx, info) {
        ctx.response.clearCookie('token');
        return {
            message: 'Goodbye!'
        };
    },
    async requestReset(parent, args, ctx, info) {
        // Check if this is a real user
        const user = await ctx.db.query.user({ where: { email: args.email }});
        if(!user) {
            throw new Error(`No such user found for email ${args.email}`);
        }
        // Set a reset token and expiry on that user
        const randomBytesPromisified = promisify(randomBytes);
        const resetToken = (await randomBytesPromisified(20)).toString('hex');
        const resetTokenExpiry = Date.now() + 3600000; // 1 hour from now
        const res = await ctx.db.mutation.updateUser({
            where: { email: args.email },
            data: { resetToken, resetTokenExpiry}
        });
        
        // Email them that reset token
        const mailRes = await transport.sendMail({
            from: 'joshualjohnson33@gmail.com',
            to: user.email,
            subject: 'Your Password Reset Token',
            html: makeANiceEmail(`Your password reset token is here! \n\n <a href="${process.env.FRONTEND_URL}/reset?resetToken=${resetToken}">Click Here to Reset</a>`)
        });

        // Return the message
        return { message: 'Thanks!' };
    },
    async resetPassword(parent, args, ctx, info) {
        // Check if the passwords match
        if(args.password !== args.confirmPassword) {
            throw new Error('Yo passwords don\'t match!');
        }
        // Check if its a legit reset token
        // Check if its expired
        const [user] = await ctx.db.query.users({
            where: {
                resetToken: args.resetToken,
                resetTokenExpiry_gte: Date.now() - 3600000
            }
        });
        if(!user) {
            throw new Error('This token is either invalid or expired!');
        }
        // Hash their new password
        const password = await bcrypt.hash(args.password, 10);
        // Save the new password to the user and remove old resetToken and fields
        const updatedUser = await ctx.db.mutation.updateUser({
            where: { email: user.email },
            data: {
                password,
                resetToken: null,
                resetTokenExpiry: null
            }
        })
        // Generate JWT
        const token = jwt.sign({ userId: updatedUser.id }, process.env.APP_SECRET);

        // Set the JWT cookie
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365
        })
        // Return the new user :D!
        return updatedUser;
        // Celebrate with a beer.
    },
    async updatePermissions(parent, args, ctx, info) {
        // Check if anyone is logged in
        if(!ctx.request.userId) {
            throw new Error('You must be logged in to do this!');
        }
        // Query the current user
        const currentUser = await ctx.db.query.user({
            where: {
                id: ctx.request.userId,
            },
        }, info);
        // Check if they have permissions to do this
        hasPermission(currentUser, ['ADMIN', 'PERMISSIONUPDATE']);
        // Update the permissions 
        return ctx.db.mutation.updateUser({
            data: {
                permissions: {
                    set: args.permissions
                },
            },
            where: {
                id: args.userId
            }
        }, info);
    },
    async addToCart(parents, args, ctx, info) {
        // Make sure user is signed in
        const userId = ctx.request.userId;
        if (!userId) {
            throw new Error('You must be signed in to do this.');
        }
        // Query the users current cart
        const [existingCartItem] = await ctx.db.query.cartItems({
            where: {
                user: { id: userId },
                item: { id: args.id }
            }
        });
        // Check if that item is already in their cart and increment by 1 if it is
        if(existingCartItem) {
            console.log('This item is already in your cart');
            return ctx.db.mutation.updateCartItem({
                where: { id: existingCartItem.id },
                data: { quantity: existingCartItem.quantity + 1 }
            }, info)
        }
        // If its not, create a fresh CartItem for that user!
        return ctx.db.mutation.createCartItem({
            data: {
                user: {
                    connect: { id: userId }
                }, 
                item: {
                    connect: { id: args.id }
                }
            }
        }, info)
    }
};

// createDog(parent, args, ctx, info) {
//     global.dogs = global.dogs || [];
//     const newDog = { name: args.name };
//     global.dogs.push(newDog);
//     return newDog;
// }

module.exports = Mutations;