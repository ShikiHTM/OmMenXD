
module.exports = (client, message, queue, track) => {
    message.channel.send({
      embed: {
          color: `${message.member.displayHexColor}`,
          author: { name: (`Đã thêm ${track.title}`), url: track.url },
          footer: { text: 'This bot edit by shiki' },
          description: 'Nếu bot có mệnh hệ gì như đột tử, không ra nhạc, lỗi nhiếc các thứ thì đi mà tag thằng shiki cho nó fix (@BotanSimper#4142)',
          fields: [
            {name: 'Tác giả:', value: track.author, inline: true },
  
            {name: 'Thời lượng:', value: track.duration, inline: true}
          ],
          thumbnail: { url: track.thumbnail },
          timestamp: new Date()
        },
      })
      .then(msg => {
        setTimeout(() => msg.delete(), 30000)
      }) 
    
      }
    