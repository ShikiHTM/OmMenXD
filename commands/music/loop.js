module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`Mày đã vào voice chat đéo đâu`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Nhầm địa chỉ đại ca ơi, em ở voice khác mẹ rồi`);
        
        if (!client.player.getQueue(message)) return message.channel.send(`Có nhạc đéo gì đâu mà chơi, sầu :pensive:`);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(`Chế độ lặp lại: **Disabled**`);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(`Chế độ lặp lại: **Enabled**`);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(`Chế độ lặp lại: **Disabled**`);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(`Chế độ lặp lại: **Enabled**`)
                .then(msg => {
                    setTimeout(() => msg.delete(), 10000)
                  }) 
            
            };
        };
    },
};