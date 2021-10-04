const { prefix, token, dragonPrefix, prefixes } = require('./config');
const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const cmdFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of cmdFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	const iPrefix = prefixes.find(p => message.content.startsWith(p));
	if (!iPrefix) return;

	const prefixHandle = iPrefix.length;
	const args = message.content.slice(prefixHandle).trim().split(/ +/);
	const commandName = (iPrefix == '!dragon') ? 'dragon' : args.shift().toLowerCase();

	if (!client.commands.has(commandName)) {
		return message.reply('yikes! That command doesn\'t exist. Use `!zork help` for a full command list.');
	}

	const command = client.commands.get(commandName);

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('error, cannot execute command.');
	}
});

client.login(token);