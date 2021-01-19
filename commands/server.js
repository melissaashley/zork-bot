module.exports = {
	name: 'server',
	description: 'Learn more about the server.',
	execute(message) {
		message.channel.send(`This server's name is: ${message.guild.name} and it has ${message.guild.memberCount} members`);
	},
};