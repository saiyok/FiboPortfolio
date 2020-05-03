const mysql = require('mysql');
const connect = require('../config/config');

let db = mysql.createPool(connect);

module.exports = db;