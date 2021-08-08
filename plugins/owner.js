let handler = function (m) {
  // this.sendContact(m.chat, '6289529518895', 'ORANG BAIK', m)
  conn.sendContact(m.chat, '6289529518895', 'Orang yang akan Sukses:)', m)
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^owner2|pemilik|yangpunya$/i

module.exports = handler
