let handler = async (m, { conn }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (!(id in conn.tebakgambar)) throw false
    let json = conn.tebakgambar[id][1]
    m.reply('Hint➞' + json.result.jawaban.replace(/[bcfghjkmnpqrstvwxyz]/g, '_') + '')
}
handler.command = /^hint$/i

module.exports = handler