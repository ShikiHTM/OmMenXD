

module.exports = {
    name: 'hololivehelp',
    aliases: ['hh'],
    category: 'hololivehelp',
    utilisation: '{prefix}hololivehelp <command name>',

    execute(client, message, args) {
        
        if (!args[0]) {

            message.channel.send({
                embed: {
                    color: `${message.member.displayHexColor}`,
                    author: { name: 'Help panel'},
                    footer: { text: 'Scarlaid gay'},
                    fields: [
                        {name: 'HololiveJP Gen 0', value: '`sora`, `miko`, `suisei`, `roboco`, `azki`'},
                        {name: 'HololiveJP Gen 1', value: '`mel`, `fubuki`, `matsuri`, `aki`, `haato`'},
                        {name: 'HololiveJP Gen 2', value: '`shion`, `choco`, `aqua`, `ayame`, `subaru`'},
                        {name: 'HololiveGamer', value: '`mio`, `okayu`, `korone`, fubuki'},
                        {name: 'HololiveJP Gen 3', value: '`rushia`, `marine`, `pekora`, `noel`, `flare`'},
                        {name: 'HololiveJP Gen 4', value: '`luna`, `kanata`, `towa`, `watame`, `coco`'},
                        {name: 'HololiveJP Gen 5', value: '`botan`, `lamy`, `nene`, `polka`, `aloe`'},
                        {name: 'HololiveJP Gen 4', value: '`luna`, `kanata`, `towa`, `watame`, `coco`'},
                        {name: 'HololiveEN Mythics', value: '`gura`, `calliope`, `kiara`, `amelia`, `ina`'},
                        {name: 'HololiveEN Pencil', value: '`baelz`, `kronii`, `fauna`, `mumei`, `sana`'},
                        {name: 'HololiveID Gen 1', value: '`risu`, `mona`, `iofi`'},
                        {name: 'HololiveID Gen 2', value: '`ollie`, `reine`, `anya`'},

                    ],
                    
                    timestamp: new Date(),
                    description: `Bảng hướng dẫn sử dụng các nhân vật hololive, mọi thứ điều được thêm bằng tay`

                },
                
            })
        }
        
    }
    
};
