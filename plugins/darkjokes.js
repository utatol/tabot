let handler = async(m, { conn }) => {
await m.reply('Bentar... kalo lama eror')
conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'Gelap ga😎',m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(dragjoles|dark|darkjoke|darkjokes)$/i

module.exports = handler
