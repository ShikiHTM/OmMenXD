const {MessageEmbed, Message, Client} = require('discord.js');
const axios = require('axios')
const csv = require('csvtojson')

module.exports = {
    name: 'covid',
    category: 'Infos',
    execute: async(client, message, args) => {
        axios.get('https://vnexpress.net/microservice/sheet/type/covid19_2021_by_day').then(function(res) {
        csv({ noheader: false })
        .fromString(res.data)
        .then((jsondata) => {
            let time = new Date()
            let day = jsondata.find(({ day_full }) => day_full === time.getFullYear() + "/" + (time.getMonth() + 1) + "/" + time.getDate())
            let old = jsondata.find(({ day_full }) => day_full === time.getFullYear() + "/" + (time.getMonth() + 1) + "/" + (time.getDate() - 1))
            //console.log(day)
            //console.log(old)
            const embed = new MessageEmbed()
            .setColor('#FE4040')
            .setDescription('Mọi thông tin được lấy từ trang [VnExpress](https://vnexpress.net/covid-19/covid-19-viet-nam)\n \nHãy chung tay chống dịch và thực hiện quy định 5k nhé')
            .setTitle('Số liệu Covid-19 ở Việt Nam')
            .addField('Số ca nhiễm trong nước:', `${Intl.NumberFormat().format(day['TỔNG CỘNG ĐỒNG'])}(+${Intl.NumberFormat().format(old['CỘNG ĐỒNG'])})`, false)
            .addField('Số ca đã hồi phục:', `${Intl.NumberFormat().format(day.total_recovered_12)}(+${Intl.NumberFormat().format(old.new_recovered)})`, true)
            .addField('Số ca tử vong:', `${Intl.NumberFormat().format(day.total_deaths)}(+${Intl.NumberFormat().format(old.new_deaths)})`, true)
            .addField('Số ca đang điều trị:', `${Intl.NumberFormat().format(day.total_active)}(+${Intl.NumberFormat().format(old.new_active)})`, true)
            .addField('Trong 7 ngày qua:', `Nước ta đã ghi nhận thêm:\nSố ca nhiễm (tăng/giảm): ${old['diff_mt7_local_cases (35)']}(${old.per_mt7_local_cases_39})\nSố ca tử vong (tăng/giảm): ${old.diff_mt7_deaths.replace(/-/g, '')}(${old.per_mt7_deaths_41})\n Số ca khỏi bệnh (tăng/giảm): ${old.diff_mt7_recovered.replace(/-/g, '')}(${old.per_mt7_recovered})`)
            .setFooter(`Số liệu được cập nhật lúc ${time.getHours()} giờ ${time.getMinutes()} phút, Ngày ${time.getDate()} Tháng ${time.getMonth() + 1}`)
            message.channel.send(embed)
        })
        })
    }
}