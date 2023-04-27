const { EmbedBuilder } = require("@discordjs/builders");
const Discord = require('discord.js')

module.exports = async(client, oldMember, newMember, db, audit) => {
    const AuditLogFetch = await newMember.guild.fetchAuditLogs({limit: 1})
    const Entry = AuditLogFetch.entries.first()

/// ============================== Изменение NICKNAME =========================================

    if (oldMember.nickname != newMember.nickname){
        client.channels.cache.get(audit).send(
            // (message.author.avatarURL(message.author.avatar))
            {embeds : [new EmbedBuilder()
                .setAuthor({iconURL: newMember.user.avatarURL(newMember.user.avatar) , name: `${newMember.user.username}#${newMember.user.discriminator}`})
                .setThumbnail(newMember.user.avatarURL(newMember.user.avatar))
                .setTitle(`Пользователь обновил свой профиль!`)
                .setDescription(`Участник <@${oldMember.user.id}> изменил никнэйм`)
                .setColor(Discord.Colors.DarkBlue)
                .setFields([
                    {
                    name: 'Было:', 
                    value : `${oldMember.nickname}`,
                    inline : true
                    },
                    {
                    name: 'Стало:',
                    value : `${newMember.nickname}`,
                    inline: true
                    },
                    {
                        name : "Информация: ",
                        value : `Изменил: <@${Entry.executor.id}>`
                    }
                ])
                .setFooter({
                    text : `ID User: ${oldMember.user.id}`
                })
                .setTimestamp()
            ]})
        db.query(`UPDATE users SET server_username = '${newMember.nickname}' WHERE discord_id = '${oldMember.user.id}'`, function(err, results) {
            if(err) client.channels.cache.get('1097079544869027880').send(`DATABASE MIGRATION: ${newMember.nickname}, STATUS: FAIL!`);
            client.channels.cache.get('1097079544869027880').send(`DATABASE MIGRATION: ${newMember.nickname}, STATUS: ACCEPT!`)
        })
    }  

/// ============================== Изменение USERNAME#TAG ======================================

    if (oldMember.user.username + '#' + oldMember.user.desriminator != newMember.user.username + "#" + newMember.user.desriminator){
        client.channels.cache.get(audit).send(
            // (message.author.avatarURL(message.author.avatar))
            {embeds : [new EmbedBuilder()
                .setAuthor({iconURL: newMember.user.avatarURL(newMember.user.avatar) , name: `${newMember.user.username}#${newMember.user.discriminator}`})
                .setThumbnail(newMember.user.avatarURL(newMember.user.avatar))
                .setTitle(`Пользователь обновил свой профиль!`)
                .setDescription(`Участник <@${oldMember.user.id}> изменил никнэйм`)
                .setColor(Discord.Colors.DarkBlue)
                .setFields([
                    {
                    name: 'Было:', 
                    value : `${oldMember.user.username}#${oldMember.user.desriminator}`,
                    inline : true
                    },
                    {
                    name: 'Стало:',
                    value : `${newMember.user.username}#${newMember.user.desriminator}`,
                    inline: true
                    }
                ])
                .setFooter({
                    text : `ID User: ${oldMember.user.id}`
                })
                .setTimestamp()
            ]})

        db.query(`UPDATE users SET system_username = '${newMember.user.username + '#' + newMember.user.desriminator}' WHERE discord_id = '${oldMember.user.id}'`, function(err, results) {
            if(err) client.channels.cache.get('1097079544869027880').send(`DATABASE MIGRATION: ${newMember.nickname}, STATUS: FAIL!`);
            client.channels.cache.get('1097079544869027880').send(`DATABASE MIGRATION: ${newMember.nickname}, STATUS: ACCEPT!`)

        })
    }

/// ============================== Изменение AVATAR ===========================================

    if (oldMember.user.avatar != newMember.user.avatar){
        db.query(`UPDATE users SET avatar = '${newMember.user.avatar}' WHERE discord_id = '${oldMember.user.id}'`, function(err, results) {
            if(err) client.channels.cache.get('1097079544869027880').send(`DATABASE MIGRATION: ${newMember.nickname}, STATUS: FAIL!`);
            client.channels.cache.get('1097079544869027880').send(`DATABASE MIGRATION: ${newMember.nickname}, STATUS: ACCEPT!`)
        })
    }

/// ============================== Изменение ROLES ============================================

    let oldMember_role = oldMember.roles.cache.map(r => r).join(', ')
    let newMember_role = newMember.roles.cache.map(r => r).join(', ')
    oldMember_role = oldMember_role.replace(", @everyone", '')
    newMember_role = newMember_role.replace(", @everyone", '')
    oldMember_role = '['+ oldMember_role +']'
    newMember_role = '['+ newMember_role +']'
    if (oldMember_role != newMember_role){
        client.channels.cache.get(audit).send(
            // (message.author.avatarURL(message.author.avatar))
            {embeds : [new EmbedBuilder()
                .setAuthor({iconURL: newMember.user.avatarURL(newMember.user.avatar) , name: `${newMember.user.username}#${newMember.user.discriminator}`})
                .setThumbnail(newMember.user.avatarURL(newMember.user.avatar))
                .setTitle(`Обновление ролей участника!`)
                .setDescription(`Участнику <@${oldMember.user.id}> изменили роли`)
                .setColor(Discord.Colors.DarkBlue)
                .setFields([
                    {
                    name: 'Было:', 
                    value : `${oldMember_role}`,
                    inline : true
                    },
                    {
                    name: 'Стало:',
                    value : `${newMember_role}`,
                    inline: true
                    },
                    {
                        name : "Информация: ",
                        value : `Изменил: <@${Entry.executor.id}>`
                    }
                ])
                .setFooter({
                    text : `ID User: ${oldMember.user.id}`
                })
                .setTimestamp()
            ]})

        db.query(`UPDATE users SET role = '${newMember_role}' WHERE discord_id = '${oldMember.user.id}'`, function(err, results) {
            if(err) client.channels.cache.get('1097079544869027880').send(`DATABASE MIGRATION: ${newMember.nickname}, STATUS: FAIL!`);
            client.channels.cache.get('1097079544869027880').send(`DATABASE MIGRATION: ${newMember.nickname}, STATUS: ACCEPT!`)
        })
    }

}

// ================== HELP ============================

module.exports.help = {
    name: 'guildMemberUpdate',
    description: 'Обновление польз'
}
