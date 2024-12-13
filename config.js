const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV2W6rSBT8lVG/mlxjMAYsRRqMN7yADQYvo6tRA80SVtMNBiL/+wgnUaKR7p0MT62mqVN9qurwCtIsxGiNGjB+BXkRVpCgbkmaHIExmJSehwpAARcSCMbgOu3xXEFOqqz7sXvMt5w1oVcXhrHVl2nTpy+TZKRo1+uBPT+DOwXy0o5D5zeAeVqXFr9lFae5Dpx9m7W7yJEPl9P+Zrb9MiJaaTu0L2LTeQb3DhGGRZj6szxACSpgvEbNDobF9+j7WnFy5mbfu2TZCdEpE5Q6RsvNiLdsf+nJ/dt+Ogn0Bib4e/Qn1ronNnS0Whxx0h+e2FNPy5dYDyuumYayxUU7yWzDbGHu3+jj0E+Rq7goJSFpvt/3nX4Wk1ZaNT1/2yriQoZhqhjX3e2gpj4qL1E/Sk8m3i5v3yM+Wx428qCqvMM8vp61BHMNQ1eHoqFFzT3tBCvwb/5FjKPl+SvxXfHhlej/9L1RSi1eiqagCl5PP9KeQoqNrpmuCcWX2jq1u6Qf1AK7pv3v0U8n01ry9f3C7eV6ftbXo+10VvJNH0/oamBEp4S5sf68H0df6ENSFr9jKbzIrttO7Bu9dC5rgZ0reuxak5lt7pbq0JMNi1g9vpisRmdRNa49tV8L5MAi1urneSZb+XwDA9NOzJstaN70iJSoCG/PjxtFqFFcMB7cKVAgP8SkgCTM0seeQAHoVgZyCkQe3QVVic6jfKPyw3R0UfgS01F42e6daTsMtKnUV7NpIR/kTVCfnwEF8iJzEMbIXYaYZEWzRRhDH2Ew/usnBVJUkzfdumrsgAJeWGBipmUeZ9D9EPXjJXScrEyJ0aSO3C1QAcb05zYiJEx93LWxTGHhBGGF5AASDMYejDG6U8BFVeigDg/sUrNNg7lheDLz96k+SLVQ235HOcjStyMDbuTQPDd8GvA8ehrSHHoSbOg8MbzHOw4UaJZjAQXC98h03/xSwXYyvw0YH5WN02/a3F3gZLV31pp1jB4qvLUeFcgFY1KUiAI2dKIyP2QRSn+Dmygaz+7X5/WlgosJX+izUmNGybUOlS+4b5KC8evnmJIzt8MTd/yMW842gALJw4Fhd3OGG/Ejmhc4UeTGg9Gf+MetayTM8x8pIoACKexOA2ky0w9/HGbyUlVkRVK7iu9ydFguIjCMMRgDedvOiTOUZ6vFUrCzxUJSfEn2JfAp30cM3ny21mdaMPdXm+HmhF+u7TJjmlFwjfAkv26aaG0VqjXgbhx/ePjs3yBgDOZ9W+3Bq8NV4VoL9xnDt3iJNhUjzRmjuqxrS7Sh8bIk5qzeqUeJjfhWatdsRfwbRIPVqUwbo7wysO7BhZBsd0bZl/znrtqbjb4WO7KHfXDWXuIeV209rUVFeivUCzN3ih6y+NLMZazsk+PZ8WO8oCuTMPSxp/iDa3Qjq5YJOL+u/GB2tMX8LCQT3pg1L9JbQB8DIn4fzOEjO6/vpvNC9Jhz73L8p2yf/qfv1BeM98n5q1+JEenTTD/LRk8e8MoI1yMVlxnMNxKEoZDLMWwtFzkaohlwv/+kQB5D4mVFAsYAJzYEFIghJtJnfg9hgjCBSQ7GA54d0qIo8DQFkkbKc4NA8hF7IHXPuo7A/R8hdc6TEQgAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "ABERT TECH",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 256760785995",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

