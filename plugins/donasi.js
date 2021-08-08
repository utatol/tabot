let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┃*SEIKLASNYA KAK:)*
┣➥ Pulsa/Dana/Gopay\n┣ [085891237055]
┣━━━━━━━━━━━━━━━━
┃ KUNJUNGI↓
┃ tabot.simdif.com
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|sewa|premium|iklan|sewabot|stay|masuk|masukinkegc|masukinkegrup$/i

module.exports = handler
