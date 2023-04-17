const Discord = module.require('discord.js');

module.exports = async (cleint,message, args) => {
    message.reply("Pong")
}

// ================== HELP ============================

module.exports.help = {
    name : 'ping',
    description : 'Проверочка',
}