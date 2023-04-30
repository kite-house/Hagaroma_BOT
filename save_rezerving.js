const fs = require('fs')
var mysqlDump = require('mysqldump');


module.exports = () => {
    fs.copyFile('./communication/pattern.json', './rezerving_copies/pattern.json', (err) => {
        if (err) throw err;
      });


    mysqlDump({
    connection: {
        host: '#',
        database: '#',
        user: '#',
        password: '#',
    },
    dumpToFile: './rezerving_copies/HAGAROMA-BOT.sql',
})


    // Не дописан код с отправкой rezerving_copies на Yandex Disk


}

module.exports.help = {
    name: 'save_rezerving',
    description: 'Сохранение и отправка резервных копий!'
} 