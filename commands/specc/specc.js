const { Client, Message } = require('discord.js')

const { execute } = require("../infos/avatar");

module.exports = {
    name: 'Specc',
    aliases: [],
    category: 'specc',
    utilition: '{prefix}specc',

    execute(Client, Message) {
        Message.channel.send({
            embed: {
                color: 'RANDOM',
                
                title: 'Specc máy thằng làm bot',
                
                fields: [
                    { name: 'CPU', value: 'Intel Core I3-10100F', inline: true, },
                    { name: 'MotherBoard', value: 'MSI H410M-A Pro', inline: true },
                    { name: 'RAM', value: '16GB', inline: true},
                    { name: 'PSU', value: 'Gigabyte 550W', inline: true},
                    { name: 'VGA', value: 'Asus TUF GTX 1650 4GB', inline: true},
                    { name: 'SSD', value: 'Lexar 120GB', inline: true},
                    { name: 'HDD', value: 'HDD Seagate 1TB', inline: true},
                ],
                thumbnail: {url: ('https://images-ext-1.discordapp.net/external/6K7mSOilKAb1kvOBTgz0cZHJzztU61zvRonWXSQaOfc/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/607086287467577344/b4b867434ef316acb18522a5da3a2845.webp')},
                timestamp: new Date(), 
            }
        }
        )
        .then(msg => {
            setTimeout(() => msg.delete(), 10000)

    }
        );
}
}