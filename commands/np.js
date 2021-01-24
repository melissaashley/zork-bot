const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pet',
	description: 'Return neopet image and url. `!zork pet <PetName>`',
	execute(message, args) {
		const baseURL = 'http://www.neopets.com/petlookup.phtml?pet=';
		const firstID = args[0];
		const buildURL = baseURL + firstID;

		const embed = new MessageEmbed()
			.setColor(0x20dda4)
			.setAuthor(`${firstID}`, `http://pets.neopets.com/cpn/${firstID}/1/6.png`, buildURL)
			.attachFiles(`http://pets.neopets.com/cpn/${firstID}/1/4.png`)
			.setImage('attachment://4.png')
			.setDescription(`› [view profile](${buildURL})`);

		if (!args.length) {
			return message.reply('you must provide an name!');
		} else if (args.length > 1) {
			return message.reply('OOPS! Looks like you have multiple names, I only accept one.');
		} else {
			return message.channel.send(embed);
		}
	},
};