const { EmbedBuilder } = require("@discordjs/builders");
const Discord = require('discord.js')
const { SlashCommandBuilder} = require('discord.js');
const fs = require('fs')

module.exports = (client, interaction, action, categoration, method, value, pattern) => {
    // ============== verification ============== 
    if(interaction.user.id != '343339732975091714') return interaction.reply({
        embeds : [new EmbedBuilder()
            .setAuthor({iconURL: client.user.avatarURL(client.user.avatar) , name: `${client.user.username}#${client.user.discriminator}`})
            .setThumbnail(client.user.avatarURL(client.user.avatar))
            .setColor(Discord.Colors.Red)
            .setTitle('Возникла ошибка!')
            .setDescription('Недостаточно прав для использование!')
            .setFooter({
                iconURL : client.user.avatarURL(client.user.avatar),
                text: client.user.username
            })
            .setTimestamp()
        ], ephemeral: true });

    // ======================= ACTION ========================

    if(action != 'delete' && action != 'create') return interaction.reply(
        {embeds : [new EmbedBuilder()
            .setAuthor({iconURL: client.user.avatarURL(client.user.avatar) , name: `${client.user.username}#${client.user.discriminator}`})
            .setThumbnail(client.user.avatarURL(client.user.avatar))
            .setColor(Discord.Colors.Red)
            .setTitle('Возникла ошибка!')
            .setFields([
                {
                    name: 'Действие',
                    value: action,
                    inline: true
                }
            ])
            .setFooter({
                iconURL : client.user.avatarURL(client.user.avatar),
                text: client.user.username
            })
            .setTimestamp()
        ], ephemeral: true});

    // ======================= METHOD ========================

    if(method != 'input' && method != 'output') return interaction.reply(
        {embeds : [new EmbedBuilder()
            .setAuthor({iconURL: client.user.avatarURL(client.user.avatar) , name: `${client.user.username}#${client.user.discriminator}`})
            .setThumbnail(client.user.avatarURL(client.user.avatar))
            .setColor(Discord.Colors.Red)
            .setTitle('Возникла ошибка!')
            .setFields([
                {
                    name: 'Метод',
                    value: method,
                    inline: true
                }
            ])
            .setFooter({
                iconURL : client.user.avatarURL(client.user.avatar),
                text: client.user.username
            })
            .setTimestamp()
        ], ephemeral: true});

    // ======================= CATEGORATION ========================
    
    if(categoration != 'empty_tag' && categoration != 'greeting' && categoration != 'how' &&  categoration != 'insults' && categoration != 'farewell' &&  categoration != 'info_developer') 
    return interaction.reply(
        {embeds : [new EmbedBuilder()
            .setAuthor({iconURL: client.user.avatarURL(client.user.avatar) , name: `${client.user.username}#${client.user.discriminator}`})
            .setThumbnail(client.user.avatarURL(client.user.avatar))
            .setColor(Discord.Colors.Red)
            .setTitle('Возникла ошибка!')
            .setFields([
                {
                    name: 'Категория',
                    value: categoration,
                    inline: true
                }
            ])
            .setFooter({
                iconURL : client.user.avatarURL(client.user.avatar),
                text: client.user.username
            })
            .setTimestamp()
        ], ephemeral: true});

    // ================================= Main Code ==================================

    value = value.replace('?', '')
    value = value.replace('!', '')
    value = value.replace('.', '')
    value = value.toLowerCase()

    // ================ пустой тэг ================

    if (categoration == 'empty_tag'){
        if (method == 'input'){
            if (action == 'create'){
                pattern.Categoration.Empty_tag_list.input_empty_tag_list.push(value)
            }
            
            if (action == 'delete'){
                pattern.Categoration.Empty_tag_list.input_empty_tag_list.filter(element => element !== value)
            }
        }

        if (method == 'output'){
            if (action == 'create'){
                pattern.Categoration.Empty_tag_list.output_empty_tag_list.push(value)
            }
            
            if (action == 'delete'){
                pattern.Categoration.Empty_tag_list.output_empty_tag_list.filter(element => element !== value)
            }
        }
    }

    // ================ Приветствие ================

    if (categoration == 'greeting'){
        if (method == 'input'){
            if (action == 'create'){
                pattern.Categoration.Greeting_list.input_greeting_list.push(value)
            }
            
            if (action == 'delete'){
                pattern.Categoration.Greeting_list.input_greeting_list.filter(element => element !== value)
            }
        }

        if (method == 'output'){
            if (action == 'create'){
                pattern.Categoration.Greeting_list.output_greeting_list.push(value)
            }
            
            if (action == 'delete'){
                pattern.Categoration.Greeting_list.output_greeting_list.filter(element => element !== value)
            }
        }
    }
    // ================ Как дела и тд ================

    if (categoration == 'how'){
        if (method == 'input'){
            if (action == 'create'){
                pattern.Categoration.How_list.input_how_list.push(value)
            }
            
            if (action == 'delete'){
                pattern.Categoration.How_list.input_how_list.filter(element => element !== value)
            }
        }

        if (method == 'output'){
            if (action == 'create'){
                pattern.Categoration.How_list.output_how_list.push(value)
            }
            
            if (action == 'delete'){
                pattern.Categoration.How_list.output_how_list.filter(element => element !== value)
            }
        }
    }

    // ================ Оскорбление ================

    if (categoration == 'insults'){
        if (method == 'input'){
            if (action == 'create'){
                pattern.Categoration.Insults_list.input_insults_list.push(value)
            }
            
            if (action == 'delete'){
                pattern.Categoration.Insults_list.input_insults_list.filter(element => element !== value)
            }
        }

        if (method == 'output'){
            if (action == 'create'){
                pattern.Categoration.Insults_list.output_insults_list.push(value)
            }
            
            if (action == 'delete'){
                pattern.Categoration.Insults_list.output_insults_list.filter(element => element !== value)
            }
        }
    }

    // ================ Прощанье ================

    if (categoration == 'farewell'){
        if (method == 'input'){
            if (action == 'create'){
                pattern.Categoration.Farewell_list.input_farewell_list.push(value)
            }
            
            if (action == 'delete'){
                pattern.Categoration.Farewell_list.input_farewell_list.filter(element => element !== value)
            }
        }

        if (method == 'output'){
            if (action == 'create'){
                pattern.Categoration.Farewell_list.output_farewell_list.push(value)
            }
            
            if (action == 'delete'){
                pattern.Categoration.Farewell_list.output_farewell_list.filter(element => element !== value)
            }
        }
    }

    // ================ Info_Developer ================

    if (categoration == 'info_developer'){
        if (method == 'input'){
            if (action == 'create'){
                pattern.Categoration.Info_developer_list.input_info_developer_list.push(value)
            }
            
            if (action == 'delete'){
                pattern.Categoration.Info_developer_list.input_info_developer_list.filter(element => element !== value)
            }
        }

        if (method == 'output'){
            if (action == 'create'){
                pattern.Categoration.Info_developer_list.output_info_developer_list.push(value)
            }
            
            if (action == 'delete'){
                pattern.Categoration.Info_developer_list.output_info_developer_list.filter(element => element !== value)
            }
        }
    }

    // ============== Save in JSON ==============


    data = JSON.stringify(pattern, null, 4)
    fs.writeFileSync('./communication/pattern.json', data); 


    // ============== Reply Message ==============

    interaction.reply({embeds : [new EmbedBuilder()
        .setAuthor({iconURL: client.user.avatarURL(client.user.avatar) , name: `${client.user.username}#${client.user.discriminator}`})
        .setThumbnail(client.user.avatarURL(client.user.avatar))
        .setColor(Discord.Colors.Green)
        .setTitle('Успешно!')
        .setFields([
            {
                name: 'Категория',
                value: categoration,
                inline: true
            },
            {
                name: 'Действие',
                value: action,
                inline: true
            },
            {
                name: 'Метод',
                value: method,
                inline: true
            },                {
                name: 'Сообщение',
                value: value,
            }
        ])
        .setFooter({
            iconURL : client.user.avatarURL(client.user.avatar),
            text: client.user.username
        })
        .setTimestamp()
    ], ephemeral: true })

}
// ================== HELP ============================

module.exports.help = {
    name : 'edit_communication',
    description : 'Редактирование общение с ботом',
    data: new SlashCommandBuilder()
    .setName("edit_communication")
    .setDescription("Редактирование общение с ботом")
    .addStringOption(option => 
        option
        .setName('action')
        .setDescription('action(delete/create)')
        .setRequired(true)
    )
    .addStringOption(option => 
        option
        .setName('categoration')
        .setDescription('Название категории: empty_tag, greeting, how , insults , farewell, info_developerm')
        .setRequired(true)
    )
    .addStringOption(option => 
        option
        .setName('method')
        .setDescription('method(input/output)')
        .setRequired(true)
    )
    .addStringOption(option => 
        option
        .setName('value')
        .setDescription('message')
        .setRequired(true)
    )
}
