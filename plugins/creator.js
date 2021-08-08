let handler = async m => m.reply(`
Silahkan dibaca dulu↓

tabot.simdif.com
`.trim()) // Tambah sendiri kalo mau
handler.help = ['owner']
handler.tags = ['info']
handler.command = /^owner|web|website$/i

module.exports = handler
