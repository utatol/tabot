let handler = async m => m.reply(`
*LIST LEADERBOARD*

1. sampah
2. xp
3. limit
4. level
5. dm
6. money

Contoh penggunaan: 
#toplimit
#topdm
`.trim()) // Tambah sendiri kalo mau
handler.help = ['lb']
handler.tags = ['info']
handler.command = /^lb|leaderboard$/i

module.exports = handler
