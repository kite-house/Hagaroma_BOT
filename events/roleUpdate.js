const { EmbedBuilder } = require("@discordjs/builders");
const Discord = require('discord.js')

module.exports = async (client, upRole, audit) => {
    const AuditLogFetch = await upRole.guild.fetchAuditLogs({limit: 1})
    const Entry = AuditLogFetch.entries.first()
    client.channels.cache.get(audit).send(
        {embeds : [new EmbedBuilder()
            .setAuthor({iconURL: upRole.guild.iconURL({Dynamic : true}) , name: upRole.guild.name})
            .setThumbnail(upRole.guild.iconURL({Dynamic : true}))
            .setTitle(`Обновлена роль!`)
            .setColor(Discord.Colors.DarkAqua)
            .setFields([
                {
                name: 'Название:',
                value : `${upRole.name}`,
                inline: true
                },
                {
                    name: 'Информация:',
                    value : `Обновил: <@${Entry.executor.id}>`,
                }

            ])
            .setFooter({
                text: `ID Role: ${upRole.id}`
            })
            .setTimestamp()
        ]})
}

// ================== HELP ============================

module.exports.help = {
    name : 'roleUpdate',
    description : 'Обновление ролей'
}