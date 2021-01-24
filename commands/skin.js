const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'skin',
	description: 'Returns skin data `!zork skin <SkinID>`',
	execute(message, args) {
		const baseURL = 'https://www1.flightrising.com/game-database/item/';
		const firstID = args[0];
		const buildURL = baseURL + firstID;

		const embed = new MessageEmbed()
			.setColor(0x20dda4)
			.setAuthor(`#${firstID}`, `https://www1.flightrising.com/static/cms/skins/${firstID}.png`, buildURL)
			.attachFiles(`https://www1.flightrising.com/static/cms/skins/art/${firstID}.png`)
			.setImage(`attachment://${firstID}.png`)
			.setDescription(`
				› [game database](${buildURL})
				› [transparent png](https://www1.flightrising.com/static/cms/skins/art/${firstID}.png)

				preview urls (*note: must replace <ids>*)
				› [preview on dragon](https://www1.flightrising.com/dgen/dressing-room/dragon?did=<DRAGON-ID>&skin=${firstID}&apparel=&xt=dressing.png)
				› [preview on scry](https://www1.flightrising.com/dgen/dressing-room/scry?sdid=<MORPHOLOGY-ID>&skin=${firstID}&apparel=&xt=dressing.png)
			`);


		if (!args.length || args == '') {
			return message.reply('you must provide a skin id!');
		} else if (isNaN(firstID)) {
			return message.reply('skin id must be numeric, try again.');
		} else {
			return message.channel.send(embed);
		}
	},
};