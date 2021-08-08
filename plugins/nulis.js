// Magernulis By MFarelS:V
// Code by DrawlNag
// Recode by Nurutomo :V
// Di recode dikit oleh uta :V
let handler  = async (m, { command, conn, text }) => {
  let id = (command.match(/[1]$/) || [])[0] || ''
  await conn.sendFile(m.chat, global.API('xteam', '/magernulis' + id, {
    text,
    nama: conn.getName(m.sender),
    kelas: 'Kelas: 8'
  }, 'APIKEY'), 'nulis.jpg', 'Nih', m)
}
handler.help = ['nulis']
handler.tags = ['nulis']

handler.command = /^nulis$/i

handler.limit = true

module.exports = handler
