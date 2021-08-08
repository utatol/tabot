let fetch = require('node-fetch')

let timeout = 100000
let poin = 1
let handler  = async (m, { conn, usedPrefix }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (id in conn.tebakgambar) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
        throw false
    }
    let res = await fetch('https://zahirr-web.herokuapp.com/api/kuis/tebakgambar?apikey=zahirgans')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
*━━━━ 「 GAMBAR 」━━━━* 
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hint untuk hint
Bonus: ${poin} Kotak mitik
━━━━━━━━━━━━━━━━━━━ 
    `.trim()
    conn.tebakgambar[id] = [
      await conn.sendFile(m.chat, json.result.images, 'tebakgambar.jpg', caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakgambar[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.result.jawaban}*`, conn.tebakgambar[id][0])
        delete conn.tebakgambar[id]
      }, timeout)
    ]
  }
  handler.help = ['tebakgambar']
  handler.tags = ['game']
  handler.command = /^tebakgambar$/i
  
  module.exports = handler
