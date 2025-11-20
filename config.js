const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FRV2lrY0l6NlFWeW8yMDk5dXNIRUxoeHZZUzRqYzlLK1V4b3A1T3JtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWNUR3ZQSjZEaHZuNHB6c3ZlV1hYK3NINzJoQlhoYk1FTmRwSHE5R2xobz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RTFPc0J2L0hRSmNmZWpTcnYyK2RjaWpkYVU1TExIeVNxS3JOMEpKS1hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUb09HZUVybTVaMmdWa2tFTGdyZXVVcEw2QVNrbHIyekNqZ3JOOGduQzBrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLTWhJT0lWcmFPb1BxbDZtL2FwTlJUOUxlb05xNDU4SDdrb2lERVZRbXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVMZk9Dc1E5M3FIZTlFVzFFRmJvYk12bXdkVmVnUjNyUVE2TW5ZSW1VU1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEwyQUR2OTdmTmF3WXN6WnBlTjZUa3RxQnBwVUVJcEZCSlE5aEQ5TENGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRTlLQ0JEaTZlQUVJME80YVhCMUZpM29FSnMyRXAvREQ3cUtuRWc4cDd4Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZjUzNjUzV5aFE1V1pQbURvTUxsTnVsdlF2SjhQVjZkemUvUys2Wllla01NRDl0N0tZSDZma3YwUWszV1REMHQ0SlFHQmNNcWdSTEx2WVl1V2hTeGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IitLYVlDRkp6ZDdrZEFkMUkrUjIzSmNESlBhVE1aZ2xjKzdCY1I3eG0rbFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkJtNTV4WThzUlNPUzE4QXB0NFdLUEEiLCJwaG9uZUlkIjoiYTMwNGM0MTMtZGFmZC00YWFjLTg1ZDYtOGZhYmViNjNlODFhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNjcFhteVU3aFRJL2dneHJKcnJDWnhVNGgwbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5TzZOb0dPL0gwVkhnUm4wN1V6c2t0ZHBMbmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRUJOR0tXTksiLCJtZSI6eyJpZCI6IjUwNDkyMjA5NTYzOjExQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjMxNDEzMzU4MDQzMjA0OjExQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVRFeXNNQkVJK3IvTWdHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibzNrTEJtcWNMa1JWbkl2bWgvYVBhNC9UQUJia1dRNGw1N01uUHJaS1lHcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQUtxVXZlZlZjR29rTE9SOGErU1Awd0xmWDVXTy9RN0Y0ZGg0bVVuK2dxSHRnTXZhTllkQzRHVms0R3lxd3dCL3p6ZEJKbC9HZVpOSCtwWTdGMW1FQkE9PSIsImRldmljZVNpZ25hdHVyZSI6InloOGlKMDB3S0NVc2g4WFppQUVOVERSbHJzdlhySWJDQ3hGbzJPbUlWaGFvNncyUnBFUGFrNmxiRys5Z3pxSVRMbFdBTzJ1Q09UK3FHSUo2SEhaY2dRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA0OTIyMDk1NjM6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYU41Q3dacW5DNUVWWnlMNW9mMmoydVAwd0FXNUZrT0plZXpKejYyU21CciJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnZ0YifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYzNjQ0ODMwLCJsYXN0UHJvcEhhc2giOiIxSzRoSDQifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝐋𝐄𝐆𝐄𝐍𝐃_𝐌𝐃 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/mhvfxt.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐋𝐄𝐆𝐄𝐍𝐃_𝐌𝐃 ",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝐋𝐄𝐆𝐄𝐍𝐃_𝐌𝐃 ",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923244180461",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*𝐋𝐄𝐆𝐄𝐍𝐃_𝐌𝐃  Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐋𝐄𝐆𝐄𝐍𝐃_𝐌𝐃  Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/mhvfxt.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923244180461",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
