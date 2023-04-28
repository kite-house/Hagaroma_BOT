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

var cron = require('node-cron');

const db = require('./db')
console.log('SYSTEM-INFO: DATABASE ACCEPT!')

const create_rezerving_copies = require('./save_rezerving')

const loader = require('./loader')
loader(client, process.env.SECRET_TOKEN_DISCORD)

// ================= Main Code ===================================

client.on('ready', () => {
    console.log("SYSTEM-INFO: START | STATUS: ACCEPT!")
    client.user.setPresence({
        activities: [{ name: `за каптами`, type: Discord.ActivityType.Watching }],
        status: 'dnd',
      });
})

/// =========== Commands ===============

client.on('interactionCreate', interaction => {
    console.log(`INTERACTION-INFO: USER: ${interaction.user.id}| USED: ${interaction.commandName}`)
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
        const pattern = require('./communication/pattern.json')
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
    console.log(`COMMUNICATION-INFO: USER: ${message.author.id}`)
    client.communication.get('conductor')(client,message)
})


/// =========== Manage Users ===========

client.on('guildMemberUpdate', (oldMember,newMember) => {
    console.log(`MEMBER-INFO: USER: ${newMember.user.id} UPDATED`)
    client.events.get('guildMemberUpdate')(client,oldMember, newMember,db, ds_member)
    client.channel_structure.get('structure_hagaroma')(client, db, newMember)
})

client.on('guildMemberAdd', newUser => {
    console.log(`MEMBER-INFO: USER: ${newMember.user.id} UPDATED`)
    client.events.get('guildMemberAdd')(client,newUser,db, ds_member)
})

client.on('guildMemberRemove', oldUser => {
    console.log(`MEMBER-INFO: USER: ${newMember.user.id} UPDATED`)
    client.events.get('guildMemberRemove')(client,oldUser,db, ds_member)
    client.channel_structure.get('structure_hagaroma')(client, db)
})

/// =========== Manage Server ===========

client.on('channelCreate', newChannel => {
    console.log(`SERVER-INFO: CREATE NEW CHANNEL`)
    client.events.get('channelCreate')(client, newChannel, ds_server)
})

client.on('channelDelete', oldChannel => {
    console.log(`SERVER-INFO: DELETE CHANNEL`)
    client.events.get("channelDelete")(client, oldChannel, ds_server)
})

client.on('channelUpdate', upChannel => {
    console.log(`SERVER-INFO: UPDATE CHANNEL`)
    client.events.get("channelUpdate")(client, upChannel, ds_server)
})

client.on('roleCreate', newRole => {
    console.log(`SERVER-INFO: CREATE NEW ROLE`)
    client.events.get("roleCreate")(client, newRole, ds_server)
})

client.on('roleDelete', oldRole => {
    console.log(`SERVER-INFO: DELETE ROLE`)
    client.events.get('roleDelete')(client, oldRole, ds_server)
})

client.on('roleUpdate', upRole => {
    console.log(`SERVER-INFO: UPDATE ROLE`)
    client.events.get("roleUpdate")(client, upRole, ds_server)
})

task = cron.schedule('0 */2 * * *', () => {
    create_rezerving_copies()
  });
/// ============================== AUTHORIZATION =====================================

task.start()

client.login(process.env.SECRET_TOKEN_DISCORD, (error) => {
    client.users.cache.get('343339732975091714').send(`ERROR LOG: ${error}`)
})