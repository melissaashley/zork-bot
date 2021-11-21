const {MessageEmbed} = require('discord.js');

module.exports = {
	name: 'dragon',
	description: 'Return dragon image and url based on id. `!zork dragon <DragonID>` or `!dragon <DragonID>`',
	execute(message, args) {
		const baseURL = 'https://www1.flightrising.com/dragon/';
		const firstID = args[0];

		if (!args.length || args == '') {
			return message.reply('you must provide an id!');
		} else if (isNaN(firstID)) {
			return message.reply('dragon ids must be numeric, try again.');
		} else {
			Object.keys(args).forEach(key => {
				const argID = args[key];

				if (!isNaN(argID)) {
					const parseID = argID.substring(0, argID.length - 2);
					const pID = parseInt(parseID) + 1;
					const buildURL = baseURL + argID;

					const embed = new MessageEmbed()
						.setColor(0x20dda4)
						.setAuthor(`#${argID}`, `http://flightrising.com/rendern/portraits/${pID}/${argID}p.png`, buildURL)
						.attachFiles(`http://flightrising.com/rendern/350/${pID}/${argID}_350.png`)
						.setImage(`attachment://${argID}_350.png`)
						.setDescription(`› [dragon bio](${buildURL})\n› [scry dragon](https://www1.flightrising.com/scrying/predict/${argID})`);

					return message.channel.send(embed);
				}
			});
		}
	},
};