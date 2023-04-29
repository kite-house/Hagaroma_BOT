const { PythonShell } = require('python-shell')
const fs = require('fs')

var mysqlDump = require('mysqldump');
exec = require('child_process').exec;
exec('pip install yadisk==1.3.3')
exec('pip install python-dotenv==1.0.0')
exec('pip install datetime')
exec('pip install os')

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

    let options = {
        mode: 'text',
        pythonPath: 'python',
        pythonOptions: [], // get print results in real-time
        scriptPath: '/',
    };
    
    PythonShell.run('send_rezerving.py', options ,function (err){
        if (err) throw (err);
    });

    console.log("SYSTEM-INFO: CREATE REZERVING COPIES")
}

module.exports.help = {
    name: 'save_rezerving',
    description: 'Сохранение и отправка резервных копий!'
} 