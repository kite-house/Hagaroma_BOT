const Discord = module.require('discord.js');

module.exports = (client, message, db) => {
    if (message.author != 'kite') return message.reply("Недостаточно прав для использование команды!")

    client.channels.cache.get("1097079544869027880").send('DATABASE MIGRATIONS STARTING!!!')
    guild = client.guilds.cache.get("749647850434068540")
    let res = guild.members.fetch();
    res.forEach((member) => {
        console.log(member.user);
        user = member.user
        let role = member.roles.cache.map(r => r).join(', ')
        role = role.replace(", @everyone", '')
        role = '['+ role +']'
        if (user.avatar == null){
            user.avatar == 'null'
        }

        let NewUser = [
            [user.id],
            [user.username],
            [user.discriminator],
            [user.avatar],
            [role]
        ]
    
        db.query(`INSERT INTO users(discord_id, username, discriminator, avatar, role) VALUES (?)`, [NewUser], function(err, results) {
            if(err) console.log(err);
            console.log(results);
        console.log("=======================================================================")
        client.channels.cache.get('1097079544869027880').send(`DATABASE MIGRATION: ${member.user.username}, STATUS: ACCEPT!`)
        });
    });
}

// ================== HELP ============================

module.exports.help = {
    name : 'migrations_full_database',
    description : 'Полное копирование всех участников дискорда, создание таблицы базы данных!',
}