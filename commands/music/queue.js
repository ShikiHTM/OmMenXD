module.exports = {
    name: 'queue',
    aliases: ['q'],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`Mày đã vào voice chat đéo đâu`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`Nhầm địa chỉ đại ca ơi, em ở voice khác mẹ rồi`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`Không có bài nào để chơi`);
        

        message.channel.send({
            embed: {
                color: `${message.member.displayHexColor}`,
                title: '**QUEUE**',
                fields: [
                    { name: 'Current:', value: `${queue.playing.title} | ${queue.playing.author}`},
                    { name: 'List:', value: (queue.tracks.map((track, i) => {return `**#${i + 1}** - [${track.title} | ${track.author}](${track.url}) (requested by : ${track.requestedBy.username})`})
                    .slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `Và còn **${queue.tracks.length - 5}** bài nữa...`: `In the playlist **${queue.tracks.length}** song(s)...`}`)},
                ],
                timestamp: new Date()
            },
          })
          .then(msg => {
              setTimeout(() => msg.delete(), 50000)
            }) 
      

        }
        }
