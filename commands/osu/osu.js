const discord = require('discord.js')
const osu = require('node-osu')

module.exports = {
    name: 'osu',
    aliases: [''],
    category: 'Osu',
    ulitisation: '{prefix}osu <action> <beatmapid|username>',
    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
     execute: async(client, message, args) => {
         var osuapi = new osu.Api('ef703a54ec7513681b67a8824e4e1ceede9cd4b4', {
            notFoundAsError: true, // Throw an error on not found instead of returning nothing. (default: true)
            completeScores: true, // When fetching scores also fetch the beatmap they are for (Allows getting accuracy) (default: false)
            parseNumeric: true // Parse numeric values into numbers/floats, excluding ids
         })
        if(args[0] == 'beatmap') {
        if(!args[0]) {
            message.channel.send({embed: {
                description: 'Please choose an action!\n use `sh!osu help for list`',
                color: 'RED'
            }})
        }

        if(!args[1]) {
            message.channel.send({embed: {
                description: 'Please type beatmap ID',
                color: 'RED'
            }})
        }

        var beatmapID = args[1]


        osuapi.getBeatmaps({ b: `${beatmapID}` }).then(map => {
            console.log(map[0]) //get the beatmap detail
            const beatmap = map[0]
            const star = beatmap.difficulty.rating;

            if( star <= 1.99) {
                var starrate = '<:easy:925718951810437130>'
            }
            if( 2 < star < 2.69) {
                var starrate = '<:normal:925718971666276363>'
            }
            if( 2.7 < star < 3.99) {
               var starrate = '<:hard:925718988699340861>'
           }
            if( 4.0 < star < 5.29) {
               var starrate = '<:insane:925718998044270634>'
           }
            if( 5.3 < star < 6.49) {
               var starrate = '<:expert:925718962979881000>'
           }
            if( star > 6.5) {
               var starrate = '<:expertplus:925718980679860224>'
           }

        
            //get beatmap link
            const beatmaplink = `https://osu.ppy.sh/b/${beatmap.id}`
             
            //get beatmap header
            const beatmapHeader = `https://assets.ppy.sh/beatmaps/${beatmap.beatmapSetId}/covers/cover.jpg`   //`https://b.ppy.sh/thumb/${beatmap.beatmapSetId}l.jpg`

            //difficulty
            const diff = `${beatmap.difficulty.rating}`
            const diffi = diff.slice(0,3)

            //Date
            const approveddate = beatmap.raw_approvedDate;
            

            //create embed
            const embed = new discord.MessageEmbed()

            .setAuthor(`${beatmap.artist} - ${beatmap.title} by ${beatmap.creator}`, message.author.displayAvatarURL({ size: 2048 }), undefined, undefined, beatmaplink)
            .setImage(beatmapHeader)
            .setColor('#ff66aa')
            .setDescription(`▸**Length:** ${Math.floor(beatmap.length.total / 60) + ':' + (beatmap.length.total % 60 < 10 ? '0' + (beatmap.length.total % 60) : beatmap.length.total % 60)} ▸**BPM:** ${beatmap.bpm}\n**Download:** [video](https://osu.ppy.sh/beatmapsets/${beatmap.id}/download) **|** [No video](https://osu.ppy.sh/beatmapsets/${beatmap.id}/download?noVideo=1) **|** [chimu](https://api.chimu.moe/v1/download/${beatmap.id}?n=1)`)
            .addField(`${starrate} __${beatmap.version}__`, `▸**Difficulty:** ${diffi}★ ▸**Max Combo:** ${beatmap.maxCombo}\n▸**AR:** ${beatmap.difficulty.approach} ▸**OD:** ${beatmap.difficulty.overall} ▸**CS:** ${beatmap.difficulty.size} ▸**HP:** ${beatmap.difficulty.drain}\n▸**PP:** ▫ **95%**- ▫ **99%**- ▫ **100%**-`)
            .setFooter(`${beatmap.approvalStatus} | ${beatmap.counts.favorites}❤ | Approved ${beatmap.raw_approvedDate}`)
            message.channel.send(embed)
            }
            )
        }
        if(args[0] == 'user') {
            if(!args[0]) {
                message.channel.send({embed: {
                    description: 'Please choose an action!\n use `sh!osu help for list`',
                    color: 'RED'
                }})
            }
            if(!args[1]) {
                message.channel.send({embed: {
                    description: 'Please type username',
                    color: 'RED'
                }})
            }
        var username = args[1]
        osuapi.getUser({ u: username }).then(user => {
            //console.log(user);
            const pfp = `https://a.ppy.sh/${user.id}`

            const embed = new discord.MessageEmbed()
            .setAuthor(`osu! Standard Profile for ${user.name}`)
            .setDescription(`▸**Bancho Rank:** #${Intl.NumberFormat().format(user.pp.rank)} (#${Intl.NumberFormat().format(user.pp.countryRank)})\n`)
            .setThumbnail(pfp)
            .setColor('#8427EE')
            message.channel.send(embed)
        });
        }
    }
}