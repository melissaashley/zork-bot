const dotenv = require('dotenv');
dotenv.config();

const config = {
	prefix: '!zork',
	token: process.env.TOKEN,
};

module.exports = config;