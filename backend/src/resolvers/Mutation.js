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
    }


    // createDog(parent, args, ctx, info) {
    //     global.dogs = global.dogs || [];
    //     const newDog = { name: args.name };
    //     global.dogs.push(newDog);
    //     return newDog;
    // }
};

module.exports = Mutations;