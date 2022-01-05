const {MessageEmbed, Message, Client} = require('discord.js');
const axios = require('axios')

module.exports = {
    name: 'banner',
    aliases: ['b'],
    category: 'Infos',
    utilisation: '{prefix}banner <username|userid|@mention>',
    execute: async(client, message, args) => {

        const target =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        if(!target) {
            message.author
        }

    axios
        .get(`https://discord.com/api/users/${target.id}`, {
            headers: {
                Authorization: `Bot ${client.config.discord.token}`
            },
        }).then((res) => {
            const { banner, accent_color } = res.data;

            if(banner) {
                const extension = banner.startsWith('a_') ? '.gif' : '.png'
                const url = `https://cdn.discordapp.com/banners/${target.id}/${banner}${extension}?size=4096`

                const embed = new MessageEmbed()
                .setTitle(`${target.user.username}'s Banner`)
                .setColor(`${message.member.displayHexColor}`)
                .setImage(url)
                .setFooter(`Wanna invite me? use sh!invite`)
                message.channel.send(embed)
            }
        })
        } 
    }