module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`Mày đã vào voice chat đéo đâu`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Nhầm địa chỉ đại ca ơi, em ở voice khác mẹ rồi`);

        if (!client.player.getQueue(message)) return message.channel.send(`Có nhạc đéo gì đâu mà chơi, sầu :pensive:`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`Rồi đấy, t skip cho rồi đấy **skipped** !`)
        .then(msg => {
            setTimeout(() => msg.delete(), 10000)
          }) 
    
    },
};