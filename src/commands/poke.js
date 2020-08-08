module.exports = {
    name: 'poke',
    description: "Poke a user",
    execute(message) {
        const poker = message.author;
        const taggedUser = message.mentions.users.first();
        return message.reply(` just poked :point_right: ${taggedUser} :eyes:`)
    }
};