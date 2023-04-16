const Discord = module.require('discord.js');
const fs = requre('fs')

module.exports = async (cleint,message) => {
    message.reply("Pong")
}



module.exports.names = ['ping']
module.exports.help = {
    name : 'ping',
    description : 'Проверочка',
    defaultPermission: True
}