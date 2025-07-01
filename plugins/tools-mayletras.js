import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {

    if (!args[0] || !args.join(' ').includes('|')) {
        return m.reply('⚠️ Usa el formato correcto:\n*darkletras Artista | Canción*\n\nEjemplo:\ndarkletras Coldplay | Yellow\n\n> ᴅᴀʀᴋ ʙʀxᴢᴢᴢ')
    }

    let [artista, cancion] = args.join(' ').split('|').map(v => v.trim())
  
    if (!artista || !cancion) {
        return m.reply('⚠️ Faltan datos, recuerda:\n*darkletras Artista | Canción*\n\n> ᴅᴀʀᴋ ʙʀxᴢᴢᴢ')
    }

    let res = await fetch(`https://api.lyrics.ovh/v1/${encodeURIComponent(artista)}/${encodeURIComponent(cancion)}`)
  
    if (!res.ok) return m.reply('🚫 No encontré la letra, revisa los datos UwU')
  
    let json = await res.json()
  
    if (!json.lyrics) return m.reply('🚫 No encontré la letra, revisa los datos UwU')
  
    let letras = json.lyrics.trim()

    if (!letras.length) return m.reply('🚫 No hay líneas de letra para mostrar UwU')
  
    let mensaje = `🎤 *${artista} - ${cancion}*\n\n${letras}\n\n✅ *Letra completa UwU* (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠❤`

    await conn.sendMessage(m.chat, { text: mensaje }, { quoted: m })
}

handler.help = ['darkletras artista | canción']
handler.tags = ['tools']
handler.command = ['darkletras']

export default handler
