const { EmbedBuilder } = require("@discordjs/builders");
const Discord = require('discord.js')
const fs = require('fs'); 
let config = require('./config_channel_structure.json')

config = config.structure_hagaroma
const id_channel_structure = config.id_channel_structure_hagaroma
let id_message_structure = config.id_message_structure_hagaroma


module.exports = async (client, db, newMember) => {
    guild = client.guilds.cache.get("749647850434068540")
    let res = await guild.members.fetch();
    db.query('DELETE FROM structure_hagaroma WHERE 1')
    db.query('ALTER TABLE structure_hagaroma AUTO_INCREMENT = 1')

    res.forEach((member) => {
        let role = member.roles.cache.map(r => r).join(', ')
        role = role.replace(", @everyone", '')
        user = member.user
        if (role.indexOf('<@&786669269206433842>') !== -1){
            if (user.avatar == null){
                user.avatar = 'null'
            }
    
            if (member.nickname == null){
                member.nickname = user.username
            }
    
            let NewUser = [
                [user.id],
                [member.nickname],
                [user.username + '#' + user.discriminator],
                [user.avatar],
                [role]
            ]
        
            db.query(`INSERT INTO structure_hagaroma(discord_id, server_username, system_username, avatar, role) VALUES (?)`, [NewUser], function(err, results) {
                if(err) console.log(err);;
            }) 
        }

    })

    // Берём данные из бд
    let text = 'Owner : Jackie // <@533718938585137162> \n ВРИО : Dimarik Hagaroma // <@1054842841022603284> \n ==============================================\n'
    db.query('SELECT server_username, discord_id FROM structure_hagaroma WHERE id;', function(err, results){
        for(let i=0; i < results.length; i++){
            text = text + results[i].server_username + '  //  ' + '<@'+results[i].discord_id + ">" +'\n'
        }

        client.channels.cache.get(id_channel_structure).messages.fetch(id_message_structure).then(message => {
            message.edit({embeds : [new EmbedBuilder()
            .setTitle('Состав HAGAROMA')
            .setDescription(text)
            .setColor(Discord.Colors.Red)
            .setFields({ name: '== The Best ==', value: 'Лучшие из лучших!' })
            .setTimestamp(Date.now())
            ]
        })
        }).catch(err => {
            client.channels.cache.get(id_channel_structure).send({embeds : [new EmbedBuilder()
                .setTitle('Состав HAGAROMA')
                .setDescription(text)
                .setColor(Discord.Colors.Red)
                .setFields({ name: '== The Best ==', value: 'Лучшие из лучших!' })
                .setTimestamp(Date.now())
            ]}).then(sent => {
                id_message_structure = String(sent.id)
                let data = require('./config_channel_structure.json')
                data.structure_hagaroma.id_message_structure_hagaroma = id_message_structure

                data = JSON.stringify(data, null, 4)
                fs.writeFileSync('./channel_structure/config_channel_structure.json', data); 

            })
        })

    })
}

// ================== HELP ============================

module.exports.help = {
    name : 'structure_hagaroma',
    description: 'Управление составом2'
}