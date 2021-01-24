const { MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
	name: 'skin',
	description: 'Returns skin data with `!zork skin <SkinID>` or `!zork skin <SkinID> <Dragon/Scry ID> <Type>`\n*ie. !zork skin 30139 53438018 dragon*',
	execute(message, args) {
		const baseURL = 'https://www1.flightrising.com/game-database/item/';
		const firstID = args[0];
		const dID = args[1];
		const dType = args[2];
		const buildURL = baseURL + firstID;
		const gameDb = `› [game database](${buildURL})\n`;
		const transPng = `› [transparent png](https://www1.flightrising.com/static/cms/skins/art/${firstID}.png)\n`;
		const pDrag = `› [preview on dragon](https://www1.flightrising.com/dgen/dressing-room/dragon?did=<DRAGON-ID>&skin=${firstID}&apparel=&xt=dressing.png)\n`;
		const pScry = `› [preview on scry](https://www1.flightrising.com/dgen/dressing-room/scry?sdid=<MORPHOLOGY-ID>&skin=${firstID}&apparel=&xt=dressing.png)\n`;
		const description = (dID && dType) ? gameDb + transPng : gameDb + transPng + pDrag + pScry;
		const charType = (dType == 'dragon') ? '' : 's';

		const skinPreview = (dID && dType) ? `https://www1.flightrising.com/dgen/dressing-room/${dType}?${charType}did=${dID}&skin=${firstID}&apparel=&xt=dressing.png` : `https://www1.flightrising.com/static/cms/skins/art/${firstID}.png`;

		console.log(skinPreview);

		const attachment = new MessageAttachment()
			.setFile(skinPreview, 'skin-preview.png');

		const embed = new MessageEmbed()
			.setColor(0x20dda4)
			.setAuthor(`#${firstID}`, `https://www1.flightrising.com/static/cms/skins/${firstID}.png`, buildURL)
			.attachFiles(attachment)
			.setImage('attachment://skin-preview.png')
			.setDescription(description);

		if (!args.length || args == '') {
			return message.reply('you must provide a skin id!');
		} else if (isNaN(firstID)) {
			return message.reply('ids must be numeric, try again.');
		} else if (dID && dType !== 'dragon' && dType !== 'scry') {
			return message.reply('third parameter must be `scry` or `dragon`, try again.');
		} else {
			return message.channel.send(embed);
		}
	},
};