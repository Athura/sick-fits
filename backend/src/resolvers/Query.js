const { forwardTo } = require('prisma-binding');
const { hasPermission } = require('../utils');

const Query = {
    items: forwardTo('db'),
    item: forwardTo('db'),
    itemsConnection: forwardTo('db'),
    me(parent, args, ctx, info) {
        // Check if there is a current userId
        if(!ctx.request.userId) {
            return null;
        }
        return ctx.db.query.user({
            where: { id: ctx.request.userId },
        }, info);
    },
    async users(parent, args, ctx, info) {
        // Check if they're logged in
        if(!ctx.request.userId) {
            throw new Error('You must be logged in!');
        }
        // Check if the user has permissions to query all the users
        hasPermission(ctx.request.user, ['ADMIN', 'PERMISSIONUPDATE']);
        // If they do, query all the users!
        return ctx.db.query.users({}, info);
    },
    async order(parent, args, ctx, info) {
        // Make sure they are logged in
        if(!ctx.request.userId) {
            throw new Error('You must be logged in to view this!');
        }
        // Query the current order
        const order = await ctx.db.query.order({
            where: { id: args.id },
        }, info);
        // Check fi they have the permisssions to see this order
        const ownsOrder = order.user.id === ctx.request.userId;
        const hasPermissionsToSeeOrder = ctx.request.user.permissions.includes('ADMIN');
        if(!ownsOrder || !hasPermissionsToSeeOrder) {
            throw new Error('You cant see this buddddd!');
        }
        // Return the order
        return order;
    },
    async orders(parent, args, ctx, info) {
        const { userId } = ctx.request;
        if(!userId) {
            throw new Error('You must be signed in!');
        }
        return ctx.db.query.orders({
            where: {
                user: { id: userId }
            }
        }, info)
    }
};

module.exports = Query;
