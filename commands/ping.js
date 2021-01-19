module.exports = {
	name: 'ping',
	description: 'Play ping pong.',
	execute(message) {
		message.channel.send('Pong.');
	},
};