const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'db',
	description: 'Return the mg / mmol based on the input `!zork db <mg>` or `!zork db <mmol>`',
	execute(message, args) {
		const inputNum = args[0];
		const mg = parseInt(inputNum * 18).toFixed(1);
		const mmol = parseInt(inputNum / 18).toFixed(1);

		if ( mmol > 0 ) {
			message.channel.send(`${inputNum} mg/dL is **${mmol} mmol/L** \n`);
		}

		if ( mg <= 900 ) {
			message.channel.send(`${inputNum} mmol/L is **${mg} mg/dL** \n`);
		}
	},
};