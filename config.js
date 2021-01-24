const dotenv = require('dotenv');
dotenv.config();

const config = {
	prefix: '!zork',
	prefixDouce: '!dragon',
	token: process.env.TOKEN,
};

module.exports = config;