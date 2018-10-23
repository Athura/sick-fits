const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
    // ctx = context, we get this from createServer's context object
    async createItem(parent, args, ctx, info) {
        // TODO: Check if user is logged in
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info);

        return item;
    },
    updateItem(parent, args, ctx, info) {
        // first take a copy of the updates
        const update = { ...args };
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
        const where = { id: args.id };
        // 1. find the item
        const item = await ctx.db.query.item({ where }, `{ id title}`);
        // 2. Check if they own that item, or have the permissions
        // TODO
        // 3. Delete it!
        return ctx.db.mutation.deleteItem({ where }, info);
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
                permissions: { set: ['USER'] }
            }
        }, info);
        // Create a JWT token for new user so they don't have to login
        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
        // We set the JWT as a cookie in the response
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
        });
        // Return the user to browser
        return user;
    },

    };

    // createDog(parent, args, ctx, info) {
    //     global.dogs = global.dogs || [];
    //     const newDog = { name: args.name };
    //     global.dogs.push(newDog);
    //     return newDog;
    // }

module.exports = Mutations;