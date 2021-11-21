const { MessageEmbed } = require('discord.js');
const cron = require('node-cron');

module.exports = {
	name: 'cron',
	description: 'starts the cron job for the raffle reminder',
	execute(message, args) {

		if (args[0] == 'start') {
			message.react('✅');
			cron.schedule('00 12 * * WED', () => {
				message.channel.send('It\'s Wednesday! The **Flight Rising Raffle** has reset. Buy tickets: https://www1.flightrising.com/trading/raffle');
			});
		}

		if (args[0] == 'stop') {
			// null for now
		}
	},
};