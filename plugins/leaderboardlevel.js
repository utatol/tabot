let handler = async (m, { conn, args }) => {
  let name = m.fromMe ? conn.user : conn.contacts[m.sender] 
  let sortedExp = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].exp - a[1].exp)
  let sortedLim = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].limit - a[1].limit)
  let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
  let sortedsampah = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
  let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
  let usersExp = sortedExp.map(v => v[0])
  let usersLim = sortedLim.map(v => v[0])
  let usersmoney = sortedmoney.map(v => v[0])
  let userslevel = sortedlevel.map(v => v[0])
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(15, sortedExp.length)
    let text = `
• *👑TOP LEVEL👑* •
Kamu: *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*

${sortedlevel.slice(0, len).map(([user, data], i) => (i + 1) + '. @' + user.split`@`[0] + ' \n→ ' + data.level + ' Lvl').join`\n`}
━━━━━━━━━━━━━━━━━━━
`.trim()
  conn.reply(m.chat, text, m, {
    contextInfo: {
      mentionedJid: [...usersExp.slice(0, len), ...usersLim.slice(0, len)]
    }
  })
}
handler.help = ['toplevel']
handler.tags = ['about']
handler.command = /^(leaderboardlevel|lblevel|toplevel)$/i
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

