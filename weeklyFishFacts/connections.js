
const mysql = require('mysql');
let pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DB,
    port: process.env.DBPORT
})

module.exports.pool = pool