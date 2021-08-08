let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    m.reply(`${toM(a)} \n❤️❤️❤️❤️❤️❤️\n${toM(b)}\n\nCie cie Makan Makan Dong:v`, null, {
        contextInfo: {
            mentionedJid: [a, b]
        }
    })
}
handler.help = ['jadian']
handler.tags = ['kerang']
handler.command = ['jadian']
handler.group = true
handler.limit = false

module.exports = handler