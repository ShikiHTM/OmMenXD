module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`Không có miếng nhạc nào được phát cả`);
            break;
        case 'NotConnected':
            message.channel.send(`Mày chưa vào voice chat thằng lồn`);
            break;
        case 'UnableToJoin':
            message.channel.send(`T đéo vào được, check hộ perm với`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${args[0].title} đéo chơi được bài này ở Việt Nam, cay thế. Skipping...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Bố mày đang bật nhạc... Hối clm`);
            break;
        default:
            message.channel.send(`Có gì đó đéo đúng anh dev ơi ... Error : ${error}`);
    };
};
