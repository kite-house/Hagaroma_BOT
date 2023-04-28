const { PythonShell } = require('python-shell')
const fs = require('fs')
var mysqlDump = require('mysqldump');


module.exports = () => {
    fs.copyFile('./communication/pattern.json', './rezerving_copies/pattern.json', (err) => {
        if (err) throw err;
      });


    mysqlDump({
    connection: {
        host: 'db4free.net',
        database: 'hagaroma_bot',
        user: 'admin_bot',
        password: 'PMzBg4Snz3!3hF2',
    },
    dumpToFile: './rezerving_copies/HAGAROMA-BOT.sql',
})

    
    PythonShell.run('send_rezerving.py', function (err){
        if (err) throw (err);
    });
}

module.exports.help = {
    name: 'save_rezerving',
    description: 'Сохранение и отправка резервных копий!'
} 