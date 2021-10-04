const { prefix } = require('../config');

module.exports = {
	name: 'help',
	description: 'Generate a list of all available commands.',
	aliases: ['commands'],
	usage: '[command name]',
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('you can use these commands with the `!zork` or `!z` prefix:');
			data.push(commands.map(command => command.name).join('\n '));
			data.push(`\nUse \`${prefix} help [command name]\` to learn more about a specific command (:`);

			return message.reply(data, { split: true })
				.then(() => {
					return;
				})
				.catch(error => {
					console.error(error);
					message.reply('uh oh, i can\'t find my commands!');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}

		data.push(`**Name:** ${command.name}`);

		if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

		message.channel.send(data, { split: true });
	},
};