const mysql = require('mysql2')

module.exports = mysql.createConnection({ 
    host: '//',
    user: '//',
    database: '//',
    password: '//',
})

module.exports.help = {
    name : "db",
    descrtiption: 'db'
}