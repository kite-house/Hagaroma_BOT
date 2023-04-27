const mysql = require('mysql2')

module.exports = mysql.createConnection({ 
    host: 'db4free.net',
    user: 'admin_bot',
    database: 'hagaroma_bot',
    password: 'PMzBg4Snz3!3hF2',
})

module.exports.help = {
    name : "db",
    descrtiption: 'db'
}