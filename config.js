const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  url: process.env.MONGOURI,
};