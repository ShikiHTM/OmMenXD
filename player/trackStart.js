module.exports = (client, message, track) => {
  message.channel.send({
    embed: {
        color: `${message.member.displayHexColor}`,
        title: "Đang phát",
        url: track.url,
        footer: { text: `Requested by: ${message.author.tag}` },
        description: 'Nếu có vấn đề như việc bot lỗi hoặc ngu như chó thì hãy DMs riêng cho thằng: BotanSimper#4142',
        fields: [
          {name: `Tiêu đề`, value: track.title}, 
          {name: `Tác giả`, value: track.author, inline: true},
          {name: `Thời lương phát`, value: track.duration, inline: true},
        ],
        thumbnail: { url: track.thumbnail },
        timestamp: new Date()
      },
    })
    .then(msg => {
        setTimeout(() => msg.delete(), 20000)
      }) 

};