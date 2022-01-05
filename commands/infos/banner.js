const { MessageEmbed } = require('discord.js');
const axios = require('axios');
module.exports = {
    name: 'serverbanner',
    aliases: ['sb'],
    category: 'Infos',
    utilisation: '{prefix}serverbanner',
        execute: (client, message, args) => {
            let guild = message.guild;
            const user =			message.mentions.members.first()
			|| message.guild.members.cache.get(args[0])
			|| message.member;
        const embed = new MessageEmbed()
            .setTitle(`${message.guild.name}'s Banner`)
            .setImage(message.guild.bannerURL({ size: 4096, dynamic: true }))
            .setFooter('Scarlaid#0001 still gay')
            .setColor(message.member.displayHexColor)
        message.channel.send(embed)
    }}