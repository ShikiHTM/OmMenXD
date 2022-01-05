module.exports = {
    name: 'resume',
    aliases: ['re'],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`Mày đã vào voice chat đéo đâu`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Nhầm địa chỉ đại ca ơi, em ở voice khác mẹ rồi`);
        
        if (!client.player.getQueue(message)) return message.channel.send(`Có nhạc đéo gì đâu mà chơi, sầu :pensive:`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`Bố mày đang chơi bài này đây đcm`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`đã dừng bài ${client.player.getQueue(message).playing.title}`)
        .then(msg => {
            setTimeout(() => msg.delete(), 10000)
          }) 
    
    },
};