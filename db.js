const mysql = require('mysql2')

module.exports = mysql.createConnection({ 
    host: 'sql.freedb.tech',
    user: 'freedb_Admin_BOT',
    database: 'freedb_HAGAROMA-BOT',
    password: 'PMzBg4Snz3!3hF2'
})

module.exports.help = {
    name : "db",
    descrtiption: 'db'
}


