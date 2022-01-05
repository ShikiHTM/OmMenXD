module.exports = (client, message, track, playlist) => {
    message.channel.send({
      embed: {
          color: `${message.member.displayHexColor}`,
          title: "Đã thêm playlist:",
          url: playlist.url,
          footer: { text: `Requested by: ${message.author.tag}` },
          description: 'Nếu bot có mệnh hệ gì như đột tử, không ra nhạc, lỗi nhiếc các thứ thì đi mà tag thằng shiki cho nó fix (@towone#4142) \nĐể lấy link playlist, bấm vào `Đã thêm Playlist` sẽ dẫn thẳng đến Youtube',
          fields: [
            {name: 'Tên playlist', value: playlist.title, inline: true },
            {name: 'Số lượng bài', value: playlist.tracks.length, inline: true },
          ],
          thumbnail: { url: playlist.thumbnail },
          timestamp: new Date()
        },
      })
      .then(msg => {
          setTimeout(() => msg.delete(), 30000)
        }) 
  
  };