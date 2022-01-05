const chalk = require('chalk');
module.exports = async (client) => {
    const date = new Date() 
    const channel = client.channels.cache.get('923396856531275786')
    //console.log(client.channels.cache.get('923396856531275786'))
    console.log(`Logged in as ${chalk.yellowBright(client.user.username + '#' + client.user.discriminator)} | Hello from ${chalk.magenta(date.getDate() + '/' + (date.getMonth() + 1) + '/' + (date.getFullYear()) + ', ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds())}`);
    console.log(`Detected modlog channel as > ${chalk.greenBright('#' + channel.name)} (ID: ${chalk.greenBright('#' + channel.id)})`)

    client.user.setActivity(client.config.discord.activity);
};