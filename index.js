const fs = require('fs');  
const Discord = require('discord.js')
const client = new Discord.Client({
    intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent
    ]
})

const {token, prefix} = require('./config.json')

const com = fs.readdir('./commands/', (err,files) => {
    if (err) console.log(err)
    let jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if(jsfiles.length <= 0) console.log("NOT COMMANDS FOR LOADING!")
    console.log((`LOADING ${jsfiles.length} COMMANDS`));
    jsfiles.forEach((f,i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i+1}. ${f} load`)
        client.commands.set(props.help.name.props)
    })
})

client.on('ready', () => {
    console.log("LOG: START")
})

/// =========== Commands ===============

client.on('messageCreate', msg => {
    if(msg.author.bot || !msg.content.startsWith(id)) return;
    const args = msg.content.slice(id.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    if (cmd == 'ping'){
        com.help(client, msg)}
        
    if (cmd == 'help'{
        message.reply('None')}
    
    else: message.reply('Такой команды не существует!')
})




client.login('OTYwMjY3OTE3MDg4NDExNjc5.GZL4N2.IXu3XSQYQPevClXarT7jJMZ9zDlbavj3-H5FFU')
