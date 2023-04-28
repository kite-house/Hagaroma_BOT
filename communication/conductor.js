pattern = require('./communication_pattern.json')
const fs = require('fs')

module.exports = async (client, message) => {
    // ============ Пустое сообщение ============

    if(pattern.Categoration.Empty_tag_list.input_empty_tag_list.find(element => element === message.content) != undefined){
        random_index = Math.floor(Math.random() * pattern.Categoration.Empty_tag_list.output_empty_tag_list.length)
        await message.reply(pattern.Categoration.Empty_tag_list.output_empty_tag_list[random_index])
    }
    // ============ Приветствие ============

    if(pattern.Categoration.Greeting_list.input_greeting_list.find(element => element === message.content) != undefined){
        random_index = Math.floor(Math.random() * pattern.Categoration.Greeting_list.output_greeting_list.length)
        await message.reply(pattern.Categoration.Greeting_list.output_greeting_list[random_index])
    }

    // ============ Как дела итд ============

    if(pattern.Categoration.How_list.input_how_list.find(element => element === message.content) != undefined){
        random_index = Math.floor(Math.random() * pattern.Categoration.How_list.output_how_list.length)
        await message.reply(pattern.Categoration.How_list.output_how_list[random_index])
    }

    // ============ Оскорбление ============

    if(pattern.Categoration.Insults_list.input_insults_list.find(element => element === message.content) != undefined){
        random_index = Math.floor(Math.random() * pattern.Categoration.Insults_list.output_insults_list.length)
        await message.reply(pattern.Categoration.Insults_list.output_insults_list[random_index])
    }

    // ============ Прощанье ============

    if(pattern.Categoration.Farewell_list.input_farewell_list.find(element => element === message.content) != undefined){
        random_index = Math.floor(Math.random() * pattern.Categoration.Farewell_list.output_farewell_list.length)
        await message.reply(pattern.Categoration.Farewell_list.output_farewell_list[random_index])
    }

    // ============ Разработчик ============

    if(pattern.Categoration.Info_developer_list.input_info_developer_list.find(element => element === message.content) != undefined){
        random_index = Math.floor(Math.random() * pattern.Categoration.Info_developer_list.output_info_developer_list.length)
        await message.reply(pattern.Categoration.Info_developer_list.output_info_developer_list[random_index])
    }
}

module.exports.help = {
    name: 'conductor',
    description: 'Проверяет сообщение пользователя, и отправляй команду по совпадению'
}