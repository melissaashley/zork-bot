const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'tryon',
	description: 'Returns apparel `!zork tryon <ApparelID> <breed> <m/f>`\nGender and breed can be left blank',
	execute(message, args) {
		const baseURL = 'https://www1.flightrising.com/game-database/item/';
		const firstID = args[0];
		const breed = args[1] ? args[1].toLowerCase() : 'wildclaw';
		const gender = (args[2] == 'f' || args[2] == 'F') ? 1 : 2;

		const breedsArr = ['fae', 'guardian', 'mirror', 'pearlcatcher', 'ridgeback', 'tundra', 'spiral', 'imperial', 'snapper', 'wildclaw', 'nocturne', 'coatl', 'skydancer', 'bogsneak'];
		const bIndex = (breedsArr.indexOf(breed) + 1);

		const fullGen = (gender !== 1) ? 'male' : 'female';

		const buildURL = baseURL + firstID;
		const gameDb = `› [game database](${buildURL})\n`;
		const line = `\nYou are previewing apparel item \`${firstID}\` on \`${fullGen} ${breedsArr[(bIndex - 1)]}s\``;
		const description = gameDb + line;

		const attachment = new MessageAttachment()
			.setFile(`https://www1.flightrising.com/dgen/dressing-room/dummy?breed=${bIndex}&gender=${gender}&skin=&apparel=${firstID}&xt=dressing.png`, 'tryon.png');

		const embed = new MessageEmbed()
			.setColor(0x20dda4)
			.setAuthor(`#${firstID}`, `https://www1.flightrising.com/static/cms/equipment/${firstID}.png`, buildURL)
			.attachFiles(attachment)
			.setImage('attachment://tryon.png')
			.setDescription(description);

		if (!args.length || args == '') {
			return message.reply('you must provide an apparel item id!');
		} else if (isNaN(firstID)) {
			return message.reply('apparel item id must be numeric, try again.');
		} else {
			return message.channel.send(embed);
		}
	},
};