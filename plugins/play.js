let limit = 30
let yts = require('yt-search')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  await m.reply('Searching...')
  if (!text) throw 'Cari apa?'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { dl_link, thumb, title, filesize, filesizeF} = await (/2$/.test(command) ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Ukuran* ${filesizeF}
Audio Sedang dikirim,, harap tunggu sekitar 1 menit.
`.trim(), m)
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
Nih
`.trim(), m)

}
handler.help = ['play', 'play2', 'lagu', 'musik', 'ytsong'].map(v => v + ' <lagu>')
handler.tags = ['downloader']
handler.command = /^play|play2|lagu|musik|ytsong$/i
handler.limit = 5

module.exports = handler

