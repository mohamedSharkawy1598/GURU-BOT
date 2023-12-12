//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '*「قم بلاشارة علي شخص👨‍💻」*'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '*「أدخل كمية _الماس_ التي تريد إضافتها」*'
    if (isNaN(txt)) throw '*「جميع الارقام」*'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '*「الحد الأدنى 1」*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`*「تم الاضافة」*
*┌●━──━𓊆اضافة الماس𓊇━──━●*
*╎𖣐➽ المجموع:* ${dmt}
*└●━──𓊆⍣⃝𝑺𝑈𝑁𝐺𓊇──━●*`)
   conn.fakeReply(m.chat, `▢ Did you receive \n\n *+${dmt}* Diamonds`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['اضافة-الماس'] 
handler.rowner = true

export default handler

