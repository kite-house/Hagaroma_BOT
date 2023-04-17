const fs = require('fs')

const Discord = require('discord.js')
const client = new Discord.Client({
    intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers,
    ]
})

const {token, prefix} = require('./config.json')


client.commands = new Discord.Collection()

const db = require('./db')


// ================= Загружаем Commands ==========================

fs.readdir('./commands', (err, files) => { // чтение файлов в папке commands
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js') // файлы не имеющие расширение .js игнорируются
    if (jsfile.length <= 0) return console.log('Команды не найдены!') // если нет ни одного файла с расширением .js

    console.log(`Загружено ${jsfile.length} команд`)
    jsfile.forEach((f, i) => { // добавляем каждый файл в коллекцию команд
        let props = require(`./commands/${f}`)
        client.commands.set(props.help.name, props)
    })
})

// ================= Загружаем Events ============================

// пока пусто

// ================= Main Code ===================================

client.on('ready', () => {
    console.log("BOT READY")
})

/// =========== Commands ===============

client.on('messageCreate', message => {
    if(message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    if (cmd == 'ping'){
        com.help(client, msg)
    }
})


client.on('guildMemberUpdate', (oldMember,newMember) => {
    console.log('Что то изменилось!')
    
})

client.login('OTYwMjY3OTE3MDg4NDExNjc5.GZL4N2.IXu3XSQYQPevClXarT7jJMZ9zDlbavj3-H5FFU')