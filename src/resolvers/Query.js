const feed = (root, args, context) => {
    return context.prisma.links()
};

const info = () => `This is the API of a Hackernews Clone`;

module.exports = {
    feed,
    info
};