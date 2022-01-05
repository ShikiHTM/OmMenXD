const discord = require('discord.js');

module.exports = {
    name: 'birthday',
    category:'misc',

    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
    
    execute: async(client, message, args) => {
        let target = message.mentions.users.first() || message.guild.members.cache.get(args[0]); 

        if(!target)
          target = message.author;

        const images = [
            'https://i.imgur.com/dRzSrA6.jpg',
            'https://i.ytimg.com/vi/feZ6wFb-q-0/maxresdefault.jpg',
            'https://i.pinimg.com/originals/5d/c0/23/5dc0230cc3d7ab7b09870aa9d0237c06.jpg',
            'https://preview.redd.it/ik60xqa19o671.png?width=2508&format=png&auto=webp&s=c6da64525b9f7c224307b8e39f7f8184a0430a11',
          ];

          const image = images[Math.floor(Math.random() * images.length)];

        setTimeout(() => {
            const what = new discord.MessageEmbed()
            .setDescription('What?')
            .setColor('RED')
            message.channel.send(what) 
        }, 1000)

        setTimeout(() => { 
            const question = new discord.MessageEmbed()
            .setDescription(`Today is ${target.user.username}\'s birthday?`)
            .setColor('RED')
            message.channel.send(question) 
        }, 4000)

        setTimeout(() => {
            const special = new discord.MessageEmbed()
            .setDescription(`Well, this is special day for you`)
            .setColor('RED')
             message.channel.send(special) 
            }, 7000)

        setTimeout(() => { 
            const abc = new discord.MessageEmbed()
            .setDescription('so')
            .setColor('RED')
            message.channel.send(abc) 
        }, 10000)

        setTimeout(() => {
        const date = new Date()

        const days = new Date().toString().substr(0, 15);



        const embed = new discord.MessageEmbed()

        .setTitle(`Today is ${days}!`)
        .setColor('RED')
        .setImage(image)
        .addField('HAPPY BIRHTDAY!', `${target.user}`, true)
        .addField('Do you want sth on ur birthday?', 'list it here my mate:', true)
        .setThumbnail(target.user.displayavatarURL)
        .setTimestamp()
        .setFooter('Wishing you many blessings in the new age')

        message.channel.send(embed)

        }, 13000) 
    }
}