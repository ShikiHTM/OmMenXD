const { Client, Message, MessageEmbed } = require("discord.js");
const akaneko = require('akaneko')

module.exports = {
    name: "glasses",
    aliases: ['gls'],
    category: 'nsfw',
    utilisation: '{prefix}glasses ',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  execute: async (client, message, args) => {
      let random = new MessageEmbed()
    .setTitle('GLASSES LÀ CHÂN LÝ')
    .setImage(await akaneko.nsfw.glasses())
    .setColor("RANDOM")
    .setFooter(`Requested by: ${message.author.tag}`)
    .setTimestamp()

     message.channel.send(random)
    .then(msg => {
      setTimeout(() => msg.delete(), 5000)
    });
  },
};