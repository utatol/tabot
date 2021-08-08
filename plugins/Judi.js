let buatall = 1
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, DevMode }) => {
    conn.judi = conn.judi ? conn.judi : {}
    if (m.chat in conn.judi) return m.reply ('Masih ada yang melakukan judi disini, tunggu sampai selesai!!')
    else conn.judi[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 85)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 80)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.DATABASE._data.users[m.sender].money / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'judi <jumlah>\n ' + usedPrefix + 'judi 1000', m)
        if (global.DATABASE._data.users[m.sender].money >= count * 1) {
            global.DATABASE._data.users[m.sender].money -= count * 1
            await m.reply('*MENGOCOK ROLE :v SABAR...*') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                conn.reply(m.chat, `┏━━ *[ㅤMENGJUDIㅤ]* ━━┓
┃
┃ *BOT:*     ${Aku}
┃ *KAMU:* ${Kamu}
┃ KAMU KALAH
┃-${count} 💰
┃
┗━━━━━━━━━━━━`.trim(), m)
            } else if (Aku < Kamu) {
                global.DATABASE._data.users[m.sender].money += count * 2
                conn.reply(m.chat, `┏━━ *[ㅤMENGJUDIㅤ]* ━━┓
┃
┃ *BOT:*     ${Aku}
┃ *KAMU:* ${Kamu}
┃ KAMU MENANG
┃+${count} 💰
┃
┗━━━━━━━━━━━━`.trim(), m)
            } else {
                global.DATABASE._data.users[m.sender].money += count * 1
                conn.reply(m.chat, `┏━━ *[ㅤMENGJUDIㅤ]* ━━┓
┃
┃ *BOT:*     ${Aku}
┃ *KAMU:* ${Kamu}
┃ㅤㅤ *SERI*
┃
┗━━━━━━━━━━━━`.trim(), m)
            }
        } else conn.reply(m.chat, `uang kamu tidak cukup untuk melakukan judi sebesar ${count} Money`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'Judi.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete conn.judi[m.chat]
    }
}
    
handler.help = ['judi <jumlah>']
handler.tags = ['rpg']
handler.command = /^(judi)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
