const discord = require('discord.js');
const redditFetch = require('reddit-fetch');
const { head } = require('request');
const moment = require('moment');

module.exports = {
    name:'subreddit',
    aliases:['subreddit'],
    category:'Misc',
    utilisation:'{prefix}subreddit <subreddit name>',

    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
    
    execute: async(client, message, args) => {
        if(message.content === 'sh!subreddit') {
            const helpimg = 'https://i.imgur.com/Fi2lV27.png';
            const help = new discord.MessageEmbed()
            
            .setTitle('Help Panel')
            .setColor('#38A5CE')
            .setDescription('sh!subreddit <subreddityouwant> \n**For instance**: sh!subreddit Tokoyami_towa \n**Attentive**: the bot cant load the video, 2 or more img')
            .setImage(helpimg)
            .setFooter('Scarlaid#0001 gay vãi lồn anh em')
            message.channel.send(help)
        }


        redditFetch({
            subreddit: `${args[0]}`,
            sort:'hot',
            allowNSFW: true,
            allowModPost: true,
            allowCrossPost: false,
            allowVideo: false
        }).then(post => {
            // console.log(post)
            const pTime=`${moment.unix(post.created_utc)}`

            const embed = new discord.MessageEmbed()
            .setTitle('Reddit Post')
            .setImage(post.url)
            .setColor('#315778')
            .addFields(
                {
                    name:'Author:', value: `u/${post.author}`, inline: true,
            },
            {
                name:'Subreddit:', value: `r/${post.subreddit}`, inline: true,
            },
            {
                name:'Is NSFW:', value: post.over_18, inline: true,
            },
            {
                name:'Title:', value: post.title, inline: true,
            },
            {
                name:'Upload Time:', value: pTime.substr(0, 15), inline:true,
            },
            {
                name:'Upvote', value: post.ups, inline: true,
            },
            {
                name:'Perma Link:', value: (`[Post link](https://reddit.com${post.permalink})`) 
            },
            )
        message.channel.send(embed)
    })
    }
}

