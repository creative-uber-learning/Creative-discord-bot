module.exports = {
	name: 'fucku',
	description: 'Give a fuck to someone',
	execute(message) {
		const taggedUser = message.mentions.users.first();
		if (!message.mentions.users.size) {
			return message.reply('You need to tag a user in order to fuck them!');
		}
		return message.channel.send(`Fuck you : ${taggedUser.username}`);
	},
};