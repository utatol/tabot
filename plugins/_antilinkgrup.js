//di recode oleh↓↓↓
//uta_kamgun
//jan di apus sontol
let handler = m => m

let linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
handler.before = function (m, { user, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE._data.chats[m.chat]
  let name = this.getName(m.sender)
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLinkgrup && isGroupLink && !isAdmin && !m.isBaileys && m.isGroup && !m.fromMe) {
    m.reply('❗LINK GRUP❗')
      this.groupRemove(m.chat, [m.sender])
    }
  }

module.exports = handler
