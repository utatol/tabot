const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text }) => {
  await m.reply('Sabar')
  let stiker = false
  try {
    let [packname, ...author] = text.split('.•+|')
    author = (author || []).join('.•+|')
    let mime = m.quoted.mimetype || ''
    if (!/webp/.test(mime)) throw 'Reply sticker!'
    let img = await m.quoted.download()
    stiker = await sticker(img, false, packname || '', author || '')
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Conversion failed'
  }
}
handler.help = ['stikerberwm']
handler.tags = ['sticker']
handler.command = /^wm|take|ambil|stikerberwm|swm$/i
handler.limit = true

module.exports = handler
