let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `${pickRandom(['YNTKTS','Wong ndak tau kok','Karna lu vvibu','Sakit deh kayaknya','Karena ga punya bapack','Karena ga punya temen','Gatau aku masih kecil😨','Kamu doi aku ya?','Keknya dia sange','Tentu tidak','tentu tidak bisa','Gatau Privasi','Oh gitu'])}
`.trim(), m)
}
handler.help = ['kenapa <pertanyaan>']
handler.tags = ['kerang']
handler.command = /^kenapa/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

