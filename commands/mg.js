const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'db',
	description: 'Return the mg / mmol based on the input `!zork db <mg>` or `!zork db <mmol>`',
	execute(message, args) {

		const roundNum = function(num, dec) {
			return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
		};

		const inputNum = args[0];
		const mgdlc = 0.05555555555;
		const mmolc = 18;

		const mmolVal = (parseFloat(inputNum) + 0) * mgdlc;
		const mgVal = (parseFloat(inputNum) + 0) * mmolc;

		const mmolFormatted = roundNum(mmolVal, 1);
		const mgFormatted = roundNum(mgVal, 0);

		if ( mgFormatted <= 900 ) {
			message.channel.send(`newline: ${inputNum} mmol/L is **${mgFormatted} mg/dL** \n`);
		}
		
		if ( mmolFormatted > 0.9 ) {
			message.channel.send(`newline: ${inputNum} mg/dL is **${mmolFormatted} mmol/L** \n`);
		}
	},
};