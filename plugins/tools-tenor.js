import { getTenorGifs } from '../lib/tenor.js'

const handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, '🔎 *Escribe algo para buscar gifs de Tenor, cielito~* (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠❤', m)

    try {
        const gifs = await getTenorGifs(text)
        console.log("[DEBUG Gifs Final]", gifs)

        if (!gifs || gifs.length === 0) {
            return conn.reply(m.chat, '❌ *No encontré gifs para eso, lo siento...* (╥﹏╥)', m)
        }

        const gifPrincipal = gifs[0]

        let decorado = `✎ 𝙂𝙞𝙛𝙨 𝙙𝙚 𝙩𝙖𝙣𝙟𝙞𝙧𝙤-𝙗𝙤𝙩 ✎\n\n`
        decorado += `Hola jeje ^^ Aquí tienes tus gifs sobre: *${text}* UwU\n\n`
        decorado += `> Hecho por *_ᴅᴀʀᴋ ʙʀxᴢᴢᴢ_*\n\n`
        decorado += `~*Encontré ${gifs.length} gifs super lindos para ti*~\n\n`

        gifs.forEach((url, i) => {
            decorado += `┏━━━━•(=^●ω●^=)•━━━━┓\n`
            decorado += `🔸 𝔾𝕚𝕗 #${i + 1}\n`
            decorado += `┣━ 🔗: ${url}\n`
            decorado += `┗━━━━━━━━━━━━━━━┛\n\n`
        })

        console.log("[DEBUG Enviando lista decorada]")
        await conn.reply(m.chat, decorado, m)

        console.log("[DEBUG Intentando enviar el gif principal]", gifPrincipal)
        try {
            await conn.sendFile(m.chat, gifPrincipal, 'hanako.gif', '*Aquí tienes tu gif principal UwU*', m)
            console.log("[DEBUG Gif enviado correctamente]")
        } catch (err) {
            console.error("❌ Error al enviar gif principal:", err)
            conn.reply(m.chat, `❌ *No se pudo enviar el gif directo, pero aquí está el link:* ${gifPrincipal}`, m)
        }

    } catch (e) {
        console.error("❌ Error general en comando Tenor:", e)
        conn.reply(m.chat, '❌ *Error al buscar el gif, perdona...* (⁠｡⁠•́︿•̀⁠｡⁠)', m)
    }
}

handler.command = ['gif', 'tenor']
handler.tags = ['tools']
handler.register = true

export default handler
