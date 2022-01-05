module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`Mày đã vào voice chat đéo đâu`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Nhầm địa chỉ đại ca ơi, em ở voice khác mẹ rồi`);
        
        if (!client.player.getQueue(message)) return message.channel.send(`Có nhạc đéo gì đâu mà chơi, sầu :pensive:`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RED',
                author: { name: track.title, url: track.url },
                footer: { text: 'This bot edit by shiki' },
                fields: [
                    { name: 'kênh', value: track.author, inline: true },
                    { name: 'Requested bởi', value: track.requestedBy.username, inline: true },
                    { name: 'chơi ở playlist', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Views', value: track.views, inline: true },
                    { name: 'Thời lượng', value: track.duration, inline: true },
                    { name: 'Filter được sử dụng', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Âm lượng', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Loop', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'Nhạc dừng hay không', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: 'Thanh thời lượng', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        })
        .then(msg => {
            setTimeout(() => msg.delete(), 30000)
          }) 
    
    },
};