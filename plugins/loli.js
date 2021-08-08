let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  let res = `https://recoders-area.caliph.repl.co/api/loli?apikey=FreeApi`
  conn.sendFile(m.chat, res, 'loli.jpg', ``, m, false)
}
handler.help = ['loli'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(loli)$/i
handler.limit = false

module.exports = handler