const mysql = require('mysql');
let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'fishFactsAdmin',
    password: 'admin',
    database: 'weeklyfishfacts'
})

module.exports.pool = pool