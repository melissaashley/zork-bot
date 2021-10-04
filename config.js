const dotenv = require('dotenv');
dotenv.config();

const config = {
	prefix: '!zork',
	dragonPrefix: '!dragon',
	prefixes: ['!zork', '!z', '!dragon'],
	token: process.env.TOKEN,
};

module.exports = config;
