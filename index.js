const fs = require('fs')
require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client({
    intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers,
    ]
})

const {ds_member, ds_server} = require('./config.json')

const db = require('./db')

const loader = require('./loader')
loader(client, process.env.SECRET_TOKEN)

// ================= Main Code ===================================

client.on('ready', () => {
    console.log("LOG-INFO: SYSTEM-START")
})

/// =========== Commands ===============

client.on('interactionCreate', interaction => {
    if (interaction.commandName === 'ping'){
        client.commands.get('ping')(client, interaction)
    }

    if (interaction.commandName === 'clear'){
        const value = interaction.options.getInteger('value');
        client.commands.get('clear')(client, interaction, value)
    }

    if (interaction.commandName === 'migrations_full_database'){
        client.commands.get('migrations_full_database')(client, interaction, db)
    }

    if (interaction.commandName === 'edit_communication'){
        const pattern = require('./communication/communication_pattern.json')
        const action = interaction.options.getString('action');
        const categoration = interaction.options.getString('categoration');
        const method = interaction.options.getString('method');
        const value= interaction.options.getString('value');
        client.commands.get('edit_communication')(client, interaction, action, categoration, method, value , pattern)
    }
})

/// =========== Communication ==========


client.on('messageCreate', message => { 
    if(message.author.bot) return;
    if(message.content.split(' ')[0] != '<@960267917088411679>') return;
    message.content = message.content.replace('<@960267917088411679>', '').trim()
    message.content = message.content.replace('?', '')
    message.content = message.content.replace('!', '')
    message.content = message.content.replace('.', '')
    message.content = message.content.toLowerCase()
    client.communication.get('conductor')(client,message)
})


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

client.login(process.env.SECRET_TOKEN, (error) => {
    client.users.cache.get('343339732975091714').send(`ERROR LOG: ${error}`)
})