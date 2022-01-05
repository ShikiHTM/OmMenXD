const {MessageEmbed, Message, Client} = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: ['pfp'],
    category: 'Infos',
    utilitions: '{prefix}pfp <username|userid|@mention>',
    execute: (client, message, args) => {
      

const target =  message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!target) {
            message.channel.send('Please give me avaiable name/id or tag them')
        }

     let avatarURL = target.user.displayAvatarURL({
          size: 4096,
          dynamic: true
      });
  const embed = new MessageEmbed()
    .setTitle(`${target.user.username}'s Avatar`)
    .setDescription(`[Avatar link](${avatarURL}) \n Dễ thương thế, nựng miếng`)
    .setImage(avatarURL)
    .setColor('RANDOM')
    message.channel.send(embed)
    }}
