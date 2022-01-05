const discord = require('discord.js');
const { MessageButton } = require('discord-buttons')

module.exports = {
    name:'invite',
    aliases:[''],
    category:'Misc',
    utilisation:'{prefix}spotify <user>',

    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
    
    execute: async(client, message, args) => {
            const button = new MessageButton()
                .setStyle('green')
                .setLabel('Invite Me')
                .setID('button')


        message.channel.send({embed: {
                            color: '',
                            description: `Seem like you want to invite me to your server?\nI\'m glad when I can journey with you :D\n[Invite Link here!](https://discord.com/api/oauth2/authorize?client_id=887736413695668254&permissions=139791191110&scope=bot)`}})
        }
    }