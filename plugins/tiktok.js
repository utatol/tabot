let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...link nya mana?'
  await m.reply('*_[WAIT]_* Sekitar 3-4 Menit\nTolong Jangan Spam')
  let res = await fetch(global.API('xteam', '/dl/tiktok', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let url = json.server_1 || json.info[0].videoUrl || ''
  if (!url) throw 'Gagal mengambil url download'
  let txt = json.info[0].text
  for (let hashtag of json.info[0].hashtags) txt = txt.replace(hashtag, '*$&*')
  await conn.sendFile(m.chat, url, 'tiktok.mp4', `
*nih*
  `.trim(), m)
}
handler.help = ['tiktoknowm'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^tik(tok)?(no)?(wm)?(2)?$/i
handler.limit = 5

module.exports = handler