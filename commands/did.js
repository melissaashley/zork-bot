const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'dragon',
	description: 'Return a url to the provided dragon id',
	execute(message, args) {
		const baseURL = 'https://www1.flightrising.com/dragon/';
		const firstID = args[0];

		let parseID = firstID.substring(0, firstID.length - 2);
		let pID = parseInt(parseID) + 1;

		const embed = new MessageEmbed()
			.setTitle(`Dragon: #${firstID}`)
			.setColor(0x20dda4)
			.attachFiles(`http://flightrising.com/rendern/350/${pID}/${firstID}_350.png`)
			.setImage(`attachment://${firstID}_350.png`)
			.setDescription(`${baseURL}${firstID}`);


		// re-write, just for testing purposes
		if (!args.length) {
			return message.reply('you must provide an id!');
		} else if (args.length > 1) {
			return message.reply('OOPS! Looks like you have multiple ids, I only accept one.');
		} else {
			return message.channel.send(embed);
		}
	},
};