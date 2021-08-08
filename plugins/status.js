let handler = async m => m.reply(`
━━°❀❬ *STATUS* ❭❀°━━┓
*STATUS:*
*HP:* R.O.G
*HUSBU:* Alok
🗣️:Bot lagi apa?
🤖:Sendiri
*BATTRE:* 0%
*Waifu:* Kelly
*Cpu:* 36°
━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['status']
handler.tags = ['info']
handler.command = /^status|statusbot$/i

module.exports = handler
