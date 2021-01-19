module.exports = {
	name: 'insult',
	description: 'Summon `Zork` to insult a friend (or foe).',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`${taggedUser.username} is a dork!`);
	},
};