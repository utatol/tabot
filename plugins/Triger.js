//buatan uta_kamgun asu

const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://some-random-api.ml/canvas/triggered?avatar=${url}`
  let stiker = await sticker(null, wasted, 'Wasted', 'P')
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('Fotonya di reply')
  }
}
handler.help = ['wasted']
handler.tags = ['sticker']
handler.command = /^triger|triggered$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.litmit = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
