let handler = async (m, { conn, args }) => {
  let name = m.fromMe ? conn.user : conn.contacts[m.sender] 
let sortedDiamond = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
let usersDiamond = sortedDiamond.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(15, sortedDiamond.length)
    let text = `
• *👑TOP DIAMOND👑* •
Kamu: *${usersDiamond.indexOf(m.sender) + 1}* dari *${usersDiamond.length}*

${sortedDiamond.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ' \n→ ' + data.diamond + ' 💎').join`\n`}
━━━━━━━━━━━━━━━━━━━
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [ ...usersDiamond.slice(0, len)]
    }
  })
}
handler.help = ['topdm']
handler.tags = ['about']
handler.command = /^(leaderboarddiamond|lbdiamond|topdiamond|topdm|lbdm)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

