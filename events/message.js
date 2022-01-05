const client = require('discord.js');
const db = require('quick.db');
const Captcha = require('captcha-canvas')
module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;
    const prefix = client.config.discord.prefix;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args);

    if(message.channel.type === 'dm' && !message.content.startsWith('!')) return message.channel.send('Please use !code to submit the captcha!')
    if(message.channel.type === 'dm' && message.content.startsWith('!code')) {
     var captcha = new Captcha();
     var code = "";
     let enteredCode = message.content.replace('!code ', code) // parse captcha code
        
     let role = message.guild.roles.cache.find(role => role.id === "922800426187886602"); 

     if (message.author.bot) return;
     
     if(code = captcha.text) {
         message.member.addRole(role)
         message.author.send('Chào mừng bạn đã đến với **THICC SMP**\n Hi vọng bạn sẽ đồng hành với chúng mình trong thời gian tới nhé!')
     }
     if(code !== captcha.text) {
         message.author.send('Có vẻ như bạn đã nhập sai mã xác nhận, hãy thử lại ở <#922715485236248606> nhé')
     } 
}
};
