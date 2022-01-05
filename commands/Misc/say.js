const moment = require('moment');
const Discord = require('discord.js');  
const { Permissions } = require('discord.js');

module.exports = {
    name: "say",
    description: "say msg",
    aliases: ['say'],
    category: 'Misc',

    execute(client, message, args) {
        if (message.content === `sh!say`) { 
            const sayembed = new Discord.MessageEmbed()
            sayembed.setColor('94e044')    
            sayembed.setTitle('Hỗ trợ')
            sayembed.setDescription('sh!say urMessageHere. \nExample: `sh!say botan kawaii`\n⠀\nWith images, you should use "⠀" character or a "."')
            sayembed.setThumbnail(`${client.user.displayAvatarURL({ size: 1024, dynamic: true})}`);
            sayembed.setTimestamp()
            sayembed.setFooter(`Requested by: ${message.author.tag}`)
            message.channel.send(sayembed).then(msg => {msg.delete({ timeout: 20000 })});
        }
        else {
            var uMsg = message.content.replace(`sh!say `, '');

            // Get channel //
            var channelS = client.channels.cache.get(message.channel.id)

            // Detect message content //
            var uMsg = message.content.replace(`sh!say `, '')
        
            const msg=new Discord.MessageEmbed();
            // Setting up the embed //
            let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
    
            msg.setAuthor(`${message.author.tag}`, message.client.guilds.resolve(message.guild.id).members.resolve(message.author.id).user.avatarURL({ format : 'jpg', dynamic: true }));
            msg.setDescription(`${uMsg}`);
            msg.setTimestamp();
            msg.setColor(`${message.member.displayHexColor}`);
            msg.setFooter("botan suki")
            if (messageAttachment) msg.setImage(messageAttachment);
            channelS.send(msg)
            .then(msg => {msg.delete({ timeout: 20000 })
      });
       }
    }
};