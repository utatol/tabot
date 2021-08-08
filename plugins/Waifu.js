let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sabar... ')
  let res = `https://recoders-area.caliph.repl.co/api/waifu?apikey=FreeApi`
  conn.sendFile(m.chat, res, 'waifu.jpg', `This is you waifu wibuh`, m, false)
}
handler.help = ['waifu'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(waifu)$/i

module.exports = handler