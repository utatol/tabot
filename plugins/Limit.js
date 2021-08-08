let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    m.reply(`Tersisa: ${global.DATABASE._data.users[who].limit} Limit`)
}
handler.help = ['limit [@user]']
handler.tags = ['info']
handler.command = /^(limit)$/i
handler.register = false
module.exports = handler