const discord = require('discord.js');

module.exports = {
    name:'spotify',
    aliases:[''],
    category:'Misc',
    utilisation:'{prefix}spotify <user>',

    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
    
    execute: async(client, message, args) => {
        let user = message.mentions.users.first() || message.author || message.guild.members.cache.get(args[0]); //This part for mentions user, if you tag someone then the code will be scan the person you tag, else the code scan ur self
        
        

        for (i = 0; i < user.presence.activities.length; i++) {
            const activity_name = user.presence.activities[i].name; 
            const activity_type = user.presence.activities[i].type;

            if (activity_type === "LISTENING" && activity_name === "Spotify")  { //This one will loop the code until they get activities name and type we want

            let trackIMG = `https://i.scdn.co/image/${user.presence.activities[i].assets.largeImage.slice(8)}`;
            let trackURL = `https://open.spotify.com/track/${user.presence.activities[i].syncID}`;
            let trackName = user.presence.activities[i].details;
            let trackAuthor = user.presence.activities[i].state;
            let trackAlbum = user.presence.activities[i].assets.largeText  //This part is a variable function for spotify information

            const embed = new discord.MessageEmbed() //Create an Embed
                .setAuthor(`${user.username}'s current Spotify track`, 'https://media.discordapp.net/attachments/914564693216088148/917727797332561960/file-spotify-logo-png-4-300x300.png')
                .setColor("#1DB954")
                .setThumbnail(trackIMG)
                .addField('Track Name:', `[${trackName}](${trackURL})`, true) //Clickable link
                .addField('Author Name:', trackAuthor, true)
                .addField('Album:', trackAlbum, true)
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp() 
            message.channel.send(embed); //send an Embed to the channel
        break;
            }
        }
    }
}
