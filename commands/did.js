const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'dragon',
	description: 'Return dragon image and url based on id. `!zork dragon <DragonID>` or `!dragon <DragonID>`',
	execute(message, args) {
		const baseURL = 'https://www1.flightrising.com/dragon/';
		const firstID = args[0];
		const parseID = firstID.substring(0, firstID.length - 2);
		const pID = parseInt(parseID) + 1;

		const embed = new MessageEmbed()
			.setTitle(`#${firstID}`)
			.setColor(0x20dda4)
			.attachFiles(`http://flightrising.com/rendern/350/${pID}/${firstID}_350.png`)
			.setImage(`attachment://${firstID}_350.png`)
			.setDescription(`${baseURL}${firstID}`);

		if (!args.length || args == '') {
			return message.reply('you must provide an id!');
		} else if (args.length > 1) {
			return message.reply('OOPS! Looks like you have multiple ids, I only accept one.');
		} else if (isNaN(firstID)) {
			return message.reply('dragon ids must be numeric, try again.');
		} else {
			return message.channel.send(embed);
		}
	},
};