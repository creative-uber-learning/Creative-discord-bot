module.exports = {
	name: 'kick',
	description: 'Ask to kick someone',
	execute(message) {
	const taggedUser = message.mentions.users.first();
	if (!message.mentions.users.size) {
		return message.reply('You need to tag a user in order to kick them!');
	}
	return message.channel.send(`You want to kick : ${taggedUser.username}`);
	},
};