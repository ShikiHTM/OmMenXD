const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'serverinfo',
    aliases: ['si'],
    category: 'Infos',
    utilisation: '{prefix}serverinfo',
        execute: (client, message, args) => {
		const user =	message.mentions.members.first()
			|| message.guild.members.cache.get(args[0])
			|| message.member;

		const embed = new MessageEmbed()
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.setColor(`${message.member.displayHexColor}`)
			.setTitle(`${message.guild.name} server stats`)
			.addFields(

				{
					name: 'Members: ',
					value: `có ${message.guild.memberCount} Member`,
					inline: true,
				},
				{
					name: 'Tổng số bot: ',
					value: `Có ${message.guild.members.cache.filter((m) => m.user.bot).size} bots`,
					inline: true,
				},
				{
					name: 'Ngày tạo: ',
					value: message.guild.createdAt.toLocaleDateString('vi-vn'),
					inline: false,
				},
				{
					name: 'Roles Count: ',
					value: `có tất cả ${message.guild.roles.cache.size} roles trong server.`,
					inline: true,
				},
				{
					name: 'Boosters: ',
					value: message.guild.premiumSubscriptionCount >= 1 ? `Server có ${message.guild.premiumSubscriptionCount} Boosters` : 'Server không có booster nào',
					inline: true,
				},

			);
		return message.channel.send(embed)

	
	},
};