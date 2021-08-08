let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`Tersisa: ${global.DATABASE._data.users[who].money} Money`)
}
handler.help = ['duit']
handler.tags = ['about']
handler.command = /^money|duit|rp|uang$/i
handler.register = false
module.exports = handler