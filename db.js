const mysql = require('mysql2')

module.exports = mysql.createConnection({ 
    host: '127.0.0.1',
    user: 'root',
    database: 'HAGAROMA-BOT',
    password: ''
})

module.exports.help = {
    name : "db",
    descrtiption: 'db'
}


