let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sangek ya :v\nkalo lama ketik ulang')
  let res = `https://api.xteam.xyz/randomimage/hentai?apikey=01645ae103eaa425`
  conn.sendFile(m.chat, res, 'hentai.jpg', `wangy wangy wangy`, m, false)
}
handler.help = ['hentai'].map(v => v + ' ')
handler.tags = ['anime']

handler.command = /^(hentai)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 2

module.exports = handler

