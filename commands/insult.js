module.exports = {
	name: 'insult',
	description: 'Summon `Zork` to insult a friend (or foe).',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user!');
		}

		const taggedUser = message.mentions.users.first();
		const insults = ['who are you again???', 'could use more glitter...', 'eat my shorts!', 'is a dork!', 'reminds me of a wet fish', 'a.k.a Quasimodo'];
		const insult = insults[Math.floor(Math.random() * insults.length)];

		message.channel.send(`${taggedUser.username} ${insult}`);
	},
};