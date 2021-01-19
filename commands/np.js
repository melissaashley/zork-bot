const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'pet',
	description: 'Return pet image and url.',
	execute(message, args) {
		const baseURL = 'http://www.neopets.com/petlookup.phtml?pet=';
		const firstID = args[0];

		const embed = new MessageEmbed()
			.setTitle(`Pet: #${firstID}`)
			.setColor(0x20dda4)
			.attachFiles(`http://pets.neopets.com/cpn/${firstID}/1/4.png`)
			.setImage('attachment://4.png')
			.setDescription(`${baseURL}${firstID}`);


		// re-write, just for testing purposes
		if (!args.length) {
			return message.reply('you must provide an name!');
		} else if (args.length > 1) {
			return message.reply('OOPS! Looks like you have multiple names, I only accept one.');
		} else {
			return message.channel.send(embed);
		}
	},
};