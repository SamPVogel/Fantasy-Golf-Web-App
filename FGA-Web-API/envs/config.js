/*
* Configuration file reads the NODE_ENV variable and configures the associated .env file
*/

const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    NODE_ENV : process.env.NODE_ENV,
    DB_TYPE : process.env.DB_TYPE,
    DB_USER : process.env.DB_USER,
    DB_PASS : process.env.DB_PASS,
    DB_HOST : process.env.DB_HOST,
    DB_PORT : process.env.DB_PORT,
    DB_DB_NAME : process.env.DB_DB_NAME
}