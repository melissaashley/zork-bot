const dotenv = require('dotenv');
dotenv.config();

const config = {
	prefix: '!zork',
	dragonPrefix: '!dragon',
	token: process.env.TOKEN,
};

module.exports = config;