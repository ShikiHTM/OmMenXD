

module.exports = {
  name: 'ping',
  aliases: [],
  category: 'Infos',
  utilisation: '{prefix}ping',

  execute(client, message) {
message.channel.send({
embed: {
  color: '#DD6F30',
  footer: { text: 'Scarlaid Gay'},
  timestamp: new Date(),
  fields: [
    {name: '**Wedsocket:**', value: `${client.ws.ping}ms`, inline:true},
    {name: '**Ping:**', value: `${Date.now() - message.createdTimestamp}ms`, inline:true}
  ],
},
})
            .then(msg => {msg.delete({ timeout: 20000 })
      });
  }
}
