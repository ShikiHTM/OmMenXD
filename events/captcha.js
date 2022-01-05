const Captcha = require('captcha-canvas')

module.exports = (message,client) => {
    if(message.channel.type === 'dm' && !message.content.startsWith('!')) return message.channel.send('Please use !code to submit the captcha!')
    if(message.channel.type === 'dm' && message.content.startsWith('!code')) {
        
        var captcha = new Captcha();
     
        let enteredCode = message.content.replace('!code ', '') // parse captcha code
        
     let role = message.guild.roles.cache.find(role => role.id === "922800426187886602"); 

     if (message.author.bot) return;
     
     if(enteredCode === '!code' + captcha.text) {
         message.member.addRole(role)
         message.author.send('Chào mừng bạn đã đến với **THICC SMP**\n Hi vọng bạn sẽ đồng hành với chúng mình trong thời gian tới nhé!')
     }
     if(enteredCode !== '!code' + captcha.text) {
         message.author.send('Có vẻ như bạn đã nhập sai mã xác nhận, hãy thử lại ở <#922715485236248606> nhé')
     } 
}
}