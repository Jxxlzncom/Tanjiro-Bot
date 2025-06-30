// ╭─────────────────────⊷
// │ 𖥔 Tanjiro - Configuración
// │ Bot basado en MayBailyes
// ╰─────────────────────⊷

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

// ╭── ✦ Número de Bot ✦ ──⊷
global.botNumber = '' // Ejemplo: 51921826291

// ╭── ✦ Propietario y Staff ✦ ──⊷
global.owner = ['51939260619', '51921826291']
global.mods = []
global.suittag = []
global.prems = []
global.creador = '51939260619'
global.namechannel = '𝖙𝖆𝖓𝖏𝖎𝖗𝖔 𝖐𝖆𝖒𝖆𝖉𝖔'
global.namechannel2 = '𝖙𝖆𝖓𝖏𝖎𝖗𝖔 𝖐𝖆𝖒𝖆𝖉𝖔'
global.namegrupo = '𝖙𝖆𝖓𝖏𝖎𝖗𝖔 𝖐𝖆𝖒𝖆𝖉𝖔'
global.namecomu = '𝖙𝖆𝖓𝖏𝖎𝖗𝖔 𝖐𝖆𝖒𝖆𝖉𝖔'
global.apodo = 'ᴅᴀʀᴋ ʙʀxᴢᴢᴢ'
global.repo = 'SoySapo6/Tanjiro-Bot'
global.pais = '⊹˚• Perú •˚⊹'
global.github = 'Jxxlzncom'

// ╭── ✦ Información del Bot ✦ ──⊷
global.libreria = 'MayBailyes'
global.baileys = 'V 6.7.16'
global.vs = '2.2.0'
global.nameqr = 'Tanjiro'
global.namebotttt = 'TanjiroBot'
global.namebot = '𝖙𝖆𝖓𝖏𝖎𝖗𝖔 𝖐𝖆𝖒𝖆𝖉𝖔'
global.sessions = './MayBots/Principal'
global.jadi = 'MayBots'
global.yukiJadibts = true

// ╭── ✦ Personalización Visual ✦ ──⊷
global.packname = '𝐓𝐀𝐍𝐉𝐈𝐑𝐎-𝐁𝐎𝐓 𝐌𝐃'
global.botname = '𝐓𝐀𝐍𝐉𝐈𝐑𝐎-𝐁𝐎𝐓 𝐌𝐃'
global.wm = '𝐓𝐀𝐍𝐉𝐈𝐑𝐎-𝐁𝐎𝐓 𝐌𝐃'
global.author = 'ᴅᴀʀᴋ ʙʀxᴢᴢᴢ'
global.dev = global.author
global.textbot = '𝐓𝐀𝐍𝐉𝐈𝐑𝐎-𝐁𝐎𝐓 𝐌𝐃 • ᴅᴀʀᴋ ʙʀxᴢᴢᴢ'
global.etiqueta = 'ᴅᴀʀᴋ ʙʀxᴢᴢᴢ'
global.listo = 'Aca lo tienes ୧⁠(⁠＾⁠ ⁠〰⁠ ⁠＾⁠)⁠୨'
global.rwait = '🕒'
global.done = '🌊'
global.error = '⚔️'
global.msm = '⚠︎'
global.emoji = '🇯🇵'
global.emoji2 = '🏹'
global.emoji3 = '😍'
global.emoji4 = '🫡'
global.emoji5 = '👻'
global.wait = '¡Esperame Cazador!';
global.waitt = '¡Esperame!';
global.waittt = '¡Espérame! Se pacienteee';
global.waitttt = '¡Esperame a Tanjiro!';

// ╭── ✦ Configuración General ✦ ──⊷
global.moneda = 'Coins'
global.welcom1 = '❍ Edita Con El Comando setwelcome'
global.welcom2 = '❍ Edita Con El Comando setbye'
global.banner = 'https://files.catbox.moe/xc7841.jpeg'
global.banner2 = 'https://files.catbox.moe/xc7841.jpeg'
global.avatar = 'https://files.catbox.moe/3qyzmz.jpg'
global.video = 'https://files.catbox.moe/095s6m.mp4'
global.video2 = [
  'https://files.catbox.moe/095s6m.mp4'
]
// ╭── ✦ Enlaces Oficiales ✦ ──⊷
global.gp1 = 'https://whatsapp.com/channel/0029Vb5OYfu3bbV5DT6Biy12'
global.comunidad1 = 'https://whatsapp.com/channel/0029Vb5OYfu3bbV5DT6Biy12'
global.channel = global.comunidad1
global.channel2 = global.comunidad1
global.md = 'https://github.com/SoySapo6/Tanjiro-Bot'
global.correo = 'jxxlznexe@gmail.com'
global.cn = global.comunidad1
global.owner_ngl = 'soymaycoldev'
global.canalIdM = ["120363403106079008@newsletter"]
global.canalNombreM = ["𝖙𝖆𝖓𝖏𝖎𝖗𝖔 𝖐𝖆𝖒𝖆𝖉𝖔"]
global.canalLink = ["https://whatsapp.com/channel/0029Vb5OYfu3bbV5DT6Biy12"]

// ╭── ✦ Catálogo y Estilo ✦ ──⊷
global.catalogo = fs.readFileSync('./src/catalogo.jpg')
global.estilo = {
  key: { fromMe: false, participant: '0@s.whatsapp.net' },
  message: {
    orderMessage: {
      itemCount: -999999,
      status: 1,
      surface: 1,
      message: global.packname,
      orderTitle: 'Bang',
      thumbnail: global.catalogo,
      sellerJid: '0@s.whatsapp.net'
    }
  }
}

// ╭── ✦ Otros Ajustes ✦ ──⊷
global.ch = {
  ch1: '120363403106079008@newsletter'
}
global.multiplier = 70
global.activeSocket = null
global.comandosEnMantenimiento = global.comandosEnMantenimiento || []

// ╭── ✦ Librerías Globales ✦ ──⊷
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

// ╭── ✦ Recarga Automática ✦ ──⊷
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("⭑ Hanako dice: Se actualizó 'settings.js' ⭑"))
  import(`${file}?update=${Date.now()}`)
})
  
