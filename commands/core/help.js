

module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            const misc = message.client.commands.filter(x => x.category == 'Misc').map((x) => '`' + x.name + '`').join(', ');
            const osu = message.client.commands.filter(x => x.category == 'Osu').map((x) => '`' + x.name + '`').join(', ');
            const specc = message.client.commands.filter(x => x.category == 'specc').map((x) => '`' + x.name + '`').join(', ');
            const hololivehelp = message.client.commands.filter(x => x.category == 'hololivehelp').map((x) => '`' + x.name + '`').join(', ');

            

            message.channel.send({
                embed: {
                    color: 'RED',
                    author: { name: 'Help panel' },
                    footer: { text: 'Edit by shiki' },
                    fields: [
                        
                        { name: "Info", value: infos},
                        { name: "Music", value: music },
                        { name: "Hololive", value: hololivehelp},
                        { name: "Misc", value: misc},
                        { name: "Specc", value: specc},
                        { name: "Osu", value: osu},
                        { name: "Filters", value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Để dùng filter, ${client.config.discord.prefix}filter (tên filter). Example : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.author.send(`${client.emotes.error} - I did not find this command !`);

            message.channel.send({
                embed: {
                    color: 'RED',
                    
                    author: { name: 'Help panel' },
                    footer: { text: 'This bot edit by Shiki' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Find information on the command provided.\nMandatory arguments `[]`, optional arguments `<>`.',
                   
                    
                }
            })
            .then(msg => {
                setTimeout(() => msg.delete(), 10000)
            });
        };
    },
};
    