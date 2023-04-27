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

const {token, prefix, ds_member, ds_server} = require('./config.json')


client.commands = new Discord.Collection()
client.events = new Discord.Collection()
client.channel_structure = new Discord.Collection()
const commands = [];

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
        commands.push(props.help.data.toJSON());
    })
    const rest = new Discord.REST().setToken(token);
    const data = rest.put(
        Discord.Routes.applicationGuildCommands('960267917088411679', '749647850434068540'),
        { body: commands },
    
    console.log(`Развёрнуто ${commands.length} команд`)
    
    );
})

// ================= Загружаем Events ============================

fs.readdir('./events', (err, files) => { // чтение файлов в папке commands
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js') // файлы не имеющие расширение .js игнорируются
    if (jsfile.length <= 0) return console.log('События не найдены!') // если нет ни одного файла с расширением .js

    console.log(`Загружено ${jsfile.length} событий`)
    jsfile.forEach((f, i) => { // добавляем каждый файл в коллекцию команд
        let props = require(`./events/${f}`)
        client.events.set(props.help.name, props)
    })
})


// ================= Загружаем Channel_Structure =================


fs.readdir('./channel_structure', (err, files) => { // чтение файлов в папке commands
    if (err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js') // файлы не имеющие расширение .js игнорируются
    if (jsfile.length <= 0) return console.log('Каналов не найдены!') // если нет ни одного файла с расширением .js

    console.log(`Загружено ${jsfile.length} канала`)
    jsfile.forEach((f, i) => { // добавляем каждый файл в коллекцию команд
        let props = require(`./channel_structure/${f}`)
        client.channel_structure.set(props.help.name, props)
    })
})


// ================= Main Code ===================================

client.on('ready', () => {
    console.log("LOG-INFO: SYSTEM-START")
})

/// =========== Commands ===============

client.on('interactionCreate', interaction => {
    if (interaction.commandName === 'ping'){
        client.commands.get('ping')(client, interaction)
    }

    if (interaction.commandName === 'clear'){ {
        const value = interaction.options.getInteger('value');
        client.commands.get('clear')(client, interaction, value)
        }
    }
})


/*client.on('messageCreate', message => {
    if(message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (cmd === 'ping'){
        client.commands.get('ping')(client, message, args)
    }

    if (cmd === 'clear'){
        client.commands.get('clear')(client, message, args)
    }

    if (cmd === 'migrations_full_database'){
        client.commands.get('migrations_full_database')(client, message, db)
    }
}) */

/// =========== Manage Users ===========

client.on('guildMemberUpdate', (oldMember,newMember) => {
    client.events.get('guildMemberUpdate')(client,oldMember, newMember,db, ds_member)
    client.channel_structure.get('structure_hagaroma')(client, db, newMember)
})

client.on('guildMemberAdd', newUser => {
    client.events.get('guildMemberAdd')(client,newUser,db, ds_member)
})

client.on('guildMemberRemove', oldUser => {
    client.events.get('guildMemberRemove')(client,oldUser,db, ds_member)
    client.channel_structure.get('structure_hagaroma')(client, db)
})

/// =========== Manage Server ===========

client.on('channelCreate', newChannel => {
    client.events.get('channelCreate')(client, newChannel, ds_server)
})

client.on('channelDelete', oldChannel => {
    client.events.get("channelDelete")(client, oldChannel, ds_server)
})

client.on('channelUpdate', upChannel => {
    client.events.get("channelUpdate")(client, upChannel, ds_server)
})

client.on('roleCreate', newRole => {
    client.events.get("roleCreate")(client, newRole, ds_server)
})

client.on('roleDelete', oldRole => {
    client.events.get('roleDelete')(client, oldRole, ds_server)
})

client.on('roleUpdate', upRole => {
    client.events.get("roleUpdate")(client, upRole, ds_server)
})

/// ============================== AUTHORIZATION =====================================

client.login(token, (error) => {
    client.users.cache.get('343339732975091714').send(`ERROR LOG: ${error}`)
})