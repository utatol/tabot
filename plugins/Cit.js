//uta gans
let handler = async (m, { conn }) => {
    let __timers = (new Date - global.DATABASE._data.users[m.sender].lastclaim)
    let _timers = (0 - __timers)
    let timers = clockString(_timers) 
    let user = global.DATABASE._data.users[m.sender]
    if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 0) {
        conn.reply(m.chat, `┏━━ *[ㅤCHEATㅤ]* ━━┓
┃ *+50000* money💵
┃ *+10* potion🍷
┃ *+10* limit💡
┃ *+10* diamond💎
┃ *+10* mythic👑
┃ *+10* Legendary👑
┃ *+10000* XP💪
┗━━━━━━━━━━━━
INI KHUSUS 
UNTUK MEMBER PREMIUM🗿`, m)
        user.money += 50000
        user.potion += 10
        user.limit += 10
        user.diamond += 10
        user.mythic += 10
        user.xp += 10000
        user.legendary += 10 
        
        user.lastclaim = new Date * 1
    } else conn.reply(m.chat, `silahkan tunggu *${timers}* lagi untuk bisa mengclaim lagi`, m)
}
handler.help = ['claim']
handler.tags = ['premium']
handler.command = /^cit$/i
handler.premium = true

handler.fail = null

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
