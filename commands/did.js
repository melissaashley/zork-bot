module.exports = {
	name: 'dragon',
	description: 'Return a url to the provided dragon id',
	execute(message, args) {
		const baseURL = 'https://site.com/parm/';
		const firstID = args[0];

		// re-write, just for testing purposes
		if (!args.length) {
			return message.reply('you must provide an id!');
		} else if (args.length > 1) {
			return message.reply('OOPS! Looks like you have multiple ids, I only accept one.');
		} else {
			return message.reply(`Here you go! \n ${baseURL}${firstID}`);
		}
	},
};