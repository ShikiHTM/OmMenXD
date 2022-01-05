require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)


const verify = require('captcha-canvas')
const fs = require('fs');
const osu = require('node-osu');
const discord = require('discord.js');
require('discord-reply')
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const chalk = require('chalk')


const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');
const { off } = require('process');

client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();
fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        //console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));


for (const file of events) {
    //console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    //console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};
client.on('message', function(message) {
    if (message.content === 'Bướm') {
    message.channel.send('Thanh Hiếu');
    }
});
client.on('message', function(message) {
    if (message.content ==='yui') {
    message.channel.send('Phake không hát kỉa kỉa dáy');
    }
});
client.on('message', function(message) {
    if (message.content === 'Scarlaid') {
    message.channel.send('Gay');
    }
});
client.on('message', function(message) {
if (message.content === 'val') {
message.channel.send('Vợ iu');
}
});
client.on('message', function(message) {
  if (message.content === 'mến') {
    message.channel.send('https://media.discordapp.net/attachments/899238558185959505/911258764148097024/Z.png')
  }
})
const rando_imgs = [
    'https://media.discordapp.net/attachments/861664521944039467/887884955974262834/90473073_p0_master1200.jpg?width=822&height=671',
    'https://media.discordapp.net/attachments/861664521944039467/887884955974262834/90473073_p0_master1200.jpg?width=822&height=671',
    'https://media.discordapp.net/attachments/861664521944039467/887884959866556477/91537529_p0_master1200.jpg?width=1193&height=671',
    'https://media.discordapp.net/attachments/861664521944039467/887884959866556477/91537529_p0_master1200.jpg?width=1193&height=671',
    'https://media.discordapp.net/attachments/861664521944039467/887884965847642182/92529738_p0_master1200.jpg?width=948&height=671',
    'https://media.discordapp.net/attachments/861664521944039467/887884969672843334/92695300_p0_master1200.jpg?width=475&height=671',
    'https://media.discordapp.net/attachments/861664521944039467/887884969823838239/92760610_p0_master1200.jpg?width=938&height=671',
    ]

    client.on('message', (message) => {
        if (message.content.startsWith('sh!botannsfw')) {
    
        const wallpapers = [
            'https://cdn.discordapp.com/attachments/861664521944039467/887884955974262834/90473073_p0_master1200.jpg',
            'https://cdn.discordapp.com/attachments/861664521944039467/887884959866556477/91537529_p0_master1200.jpg',
            'https://cdn.discordapp.com/attachments/861664521944039467/887884959782686761/91634388_p0_master1200.jpg',
            'https://cdn.discordapp.com/attachments/861664521944039467/887884960772546630/92514631_p0_master1200.jpg',
            'https://cdn.discordapp.com/attachments/861664521944039467/887884962651574353/92580003_p0_master1200.jpg',
            'https://cdn.discordapp.com/attachments/861664521944039467/887884965847642182/92529738_p0_master1200.jpg',
            'https://cdn.discordapp.com/attachments/861664521944039467/887884969672843334/92695300_p0_master1200.jpg',
            'https://cdn.discordapp.com/attachments/861664521944039467/888344255276404746/88755609_p2_master1200.jpg',
            'https://cdn.discordapp.com/attachments/861664521944039467/888344259495878656/92458671_p0_master1200.jpg',
            'https://cdn.discordapp.com/attachments/861664521944039467/888344260485730334/92791259_p0_master1200.jpg',
            'https://cdn.discordapp.com/attachments/861664521944039467/888344261299417148/92674181_p3_master1200.jpg',
            'https://cdn.discordapp.com/attachments/861664521944039467/888344261978914826/92518851_p3_master1200.jpg',
            'https://cdn.discordapp.com/attachments/861664521944039467/887884969823838239/92760610_p0_master1200.jpg',
    
        ];
        const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
        message.channel.send("***My waifu nsfw***", {files: [response]})
        .then(msg => {
            setTimeout(() => msg.delete(), 5000)
        }) 
        }
        
    });

 

client.on('message', message => {
    if (message.content.startsWith(`${client.config.discord.prefix}say `)) {
    message.delete({ timeout: 50 });;
    }
});    

//triggers on messages
client.on("message", message => {
    //if its a message from a bot, quit
    if (message.author.bot) return;
    //if it doesnt have the prefix, quit
    if (message.content.indexOf(client.config.discord.prefix) !== 0) return;
    //splits the message into the command and arguements
    const args = message.content.slice(client.config.discord.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    client.channels.cache.get('923396856531275786').send(' ✅ ' + message.author.tag +  ' executed ' + `**${message.content}**` + ' in ' + `${message.channel} (${message.guild.name})`)
    console.log(` ✅ ${chalk.greenBright.bold(message.author.tag)} ${chalk.cyan('executed')} ${chalk.greenBright.bold(message.content)} ${chalk.cyan('in')} ${chalk.magenta.bold(message.channel.name)} ${chalk.magenta.bold(`(${message.guild.name})`)}`)
    
})

    //Bot is on
    client.on('ready', message => {
        client.channels.cache.get('923396856531275786').send('Hello, Shiki bot is on!\nsh! is my prefix, have fun! ')
        .then(msg => {
            setTimeout(() => msg.delete(), 1000)
          }) 
    })

    client.on('message', message => {
        const moment = require('moment')
    
    if (message.author.bot) return;
   
    if (message.content.indexOf(client.config.discord.prefix) !== 0) return;
   
    const args = message.content.slice(client.config.discord.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
        //gen 0
        if(command === 'roboco') {
            var character = 'roboco-san'
        }
        if (command === 'suisei') {
            var character = 'hoshimachi_suisei'
        }
        if(command === 'azki') {
            var character = 'azki_(hololive)'
        }
        if(command === 'sora') {
            var character = 'tokino_sora'
        }
        if(command === 'miko') {
            var character = 'sakura_miko'
        }
        //gen 1
        if(command === 'fubuki') {
            var character = 'shirakami_fubuki'
        }
        if(command === ['haachama', 'haato']) {
            var character = 'akai_haato'
        }
        if(command === 'mel') {
            var character = 'yozora_mel'
        }
        if(command === 'aki') {
            var character = 'aki_rosenthal'
        }
        if(command === 'matsuri') {
            var character = 'natsuiro_matsuri'
        }
        //gen 2
        if(command === 'subaru') {
            var character = 'oozora_subaru'
        }
        if(command === 'ayame') {
            var character = 'nakiri_ayame'
        }
        if(command === 'choco') {
            var character = 'yuzuki_choco'
        }
        if(command === 'shion') {
            var character = 'murasaki_shion'
        }
        if(command === 'aqua') {
            var character = 'minato_aqua'
        }
        //GAMER
        if(command === 'korone') {
            var character = 'inugami_korone'
        }
        if(command === 'mio') {
            var character = 'ookami_mio'
        }
        if(command === 'okayu') {
            var character = 'nekomata_okayu'
        }
        //gen 3 (hololive Fantasy)
        if(command === 'flare') {
            var character = 'shiranui_flare'
        }
        if(command === 'pekora') {
            var character = 'usada_pekora'
        }
        if(command === 'rushia') {
            var character = 'uruha_rushia'
        }
        if(command === 'noel') {
            var character = 'shirogane_noel'
        }
        if(command === 'marine') {
            var character = 'houshou_marine'
        }
        //gen 4 (HoloForce)
        if (command === 'watame') {
            var character = 'tsunomaki_watame'
        }
        if (command === 'kanata') {
            var character = 'amane_kanata'
        }
        if(command === 'luna') {
            var character = 'himemori_luna'
        }
        if(command === 'coco') {
            var character = 'kiryu_coco'
        }
        if(command === 'towa') {
            var character = 'tokoyami_towa'
        }
        //gen 5 (HoloFive)
        if (command === 'nene') {
            var character = 'momosuzu_nene'
        }
        if (command === 'aloe') {
            var character = 'mano_aloe'
        }
        if(command === 'botan') {
            var character = 'shishiro_botan'
        }
        if(command === 'lamy') {
            var character = 'yukihana_lamy'
        }
        if(command === 'polka') {
            var character = 'omaru_polka'
        }
        //gen 6 (HoloX)
        if (command === 'laplus') {
            var character = 'la+_darknesss'
        }
        if (command === 'lui') {
            var character = 'takane_lui'
        }
        if (command === 'koyori') {
            var character = 'hakui_Koyori'
        }
        if (command === 'chloe') {
            var character = 'sakamata_chloe'
        }
        if (command === 'iroha') {
            var character = 'kazuma_iroha'
        }
        //EN project: HOPE
        if (command === 'irys') {
            var character = 'irys_(hololive)'
        }
        //EN gen 1
        if (command === 'ina') {
            var character = 'ninomae_ina\'nis'
        }
        if (command === 'calli') {
            var character = 'mori_calliope'
        }
        if (command === 'kiara') {
            var character = 'takanashi_kiara'
        }
        if (command === 'amelia') {
            var character = 'amelia_watson'
        }
        if (command === 'gura') {
            var character = 'gawr_gura'
        }
        //EN gen 2
        if (command === 'sana') {
            var character = 'tsukumo_sana'
        }
        if (command === 'fauna') {
            var character = 'ceres_fauna'
        }
        if (command === 'mumei') {
            var character = 'nanashi_mumei'
        }
        if (command === 'kronii') {
            var character = 'ouro_kronii'
        }
        if(command === 'baelz') {
            var character = 'hakos_baelz'
        }
        //ID gen 1
        //ID gen 2
        //CN gen 1
        //CN gen 2
        if (command === 'hololive') {
            var character = 'hololive'
        }
        if(character) {
            let strargs = args.toString();
            let newargs = strargs.replace(/,/g, '+');
            require('request')(`https://danbooru.donmai.us/posts.json?limit=1&tags=${character}+order%3Arandom` + '+' + newargs,
            function(res, err, body) {
                var data = JSON.parse(body)
                if(data[0] !== undefined) {
                    if(data[0].rating = 'e') {
                        var nsfw = 'True'
                    }
                    if(data[0].rating = 's') {
                        var nsfw = 'False'
                    }
                    if(data[0].rating = 'q') {
                        var nsfw = 'False'
                    }
                    //console.log(data[0])
                    const pTime = `${data[0].created_at}`
                    const embed = new discord.MessageEmbed()
                    .setTitle('Here ya go!')
                    .setImage(data[0].file_url)
                    .setColor(message.member.displayHexColor)
                    .addField('Author:', data[0].tag_string_artist, true)
                    .addField('Dimension:', data[0].image_width + 'x' + data[0].image_height, true)
                    .addField('Is NSFW:', nsfw, true)
                    .addField('Created at:', pTime.substr(0,10).replace(/-/g, '/'), true)
                    .addField('Source:', `[Here](${data[0].source})`, true)
                    message.channel.send(embed)
                }
            }
            )
        }
    }
)
client.login(client.config.discord.token);
