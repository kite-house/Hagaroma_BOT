const Discord = module.require('discord.js');

module.exports = (client, message, args) => {
    if (!args[0]) return message.reply("Укажите значение!");
    if (args[0] > 100) return message.reply("Укажите значение меньше 100!");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Deleted: ${args[0]} messages.`)
        .then((msg) => msg.delete({ timeout : 10000 }));;
    });
}

// ================== HELP ============================

module.exports.help = {
    name : 'clear',
    description: 'очищает'
}