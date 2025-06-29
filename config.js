const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VUyZKjOBD9F11xtMHsjqiIYTNQ3m3Ay0QfZBBYZrUEtnGH/72DclVXH2Z6am5SKpXv6eVL/QBFiSkaoxYMf4CK4AusUbes2wqBIdCbOEYE9EAEawiGwJ3qJ9koCrNNy9Xe2hNdmSVnHJuT7SVN56hdOayX89Eg2L2ARw9UzSHD4R8KxjO4luRgspwdsuS8Oed9IbAXNndiVDOF4+zm6XmMnPaUWS/g0VWEmOAisaojyhGB2Ri1C4jJ1+j7VjCb1ltnPxdFs8ql9TRy7GbU96/iRFFdlIs8xGORziz6NfoSMYRkxHgIqrlWHSJUwWapz9VXRe1fDsHR19xJ3k72kkGf9ClOChS5ESpqXLdf1j23VauvNTC6MrS1nZU8aDyGNuLA0q5TPkBprDsFIzIlX36NuLucM/Z0gw+eEZbGEUWRfG9xMPaXPq2Y/rTdG34z7Us61n4nviAfXkn/j+6pIYs7UxNj7mie+7NTtvLMyLqtJ4tRhHL5mCn7XaFUN9f6In1ZGrXhDSqzdZGWSp2baKOnDl9x67uZXCV63VXWPZmiXE8/6cO6IX9ieZ9HlriPHSwIKg7OjerCYDxKSKvNjaj0TF/tl3yIFpa5kucbNXM5f6lvhBEzCAWZCsquCC9xfosTi9lf0hVL5tKrnry8vShFrRuBIffoAYISTGsCa1wWXUwVegBGlzUKCarf1AVjJroL6yofrfCVbHlJGnHota2l14s03TIzzSArPyLVRuHdF9ADFSlDRCmKHEzrkrRTRClMEAXDv7/3QIFu9bNvHRrP9UCMCa39oqmyEkYfTf04hGFYNkW9bovQ6BaIgCH7GUZ1jYuEdjI2BSThEV+QcYQ1BcMYZhT9eiAiKHqP/brd3YpQDXFGwRAYi0NxUjTdcos4Uaa2rbGJZiQa+ET76NpTFl+B2dTgt86FXJorH8L7zJia6DD2y13JbHO4XR74IDYnK//lH4qAIQjdE7tIuDpAy/OrJW4177heTjYLe3kLndWRr5aJcp/AKsmU2U7V7moka167Ebj7KB1HkKkTTbkedt7kOrOc8ra6z73A1F46tAhdcIh+B8PBYr3be6MLSVemZb2mg2Oubh1DlHdNrFSnUyDdgkQ3yYiJbPkaXopUP0wrLYc2ZVnxGLSptjoNRHOyXgpjxp7P97amPf2UvxkZR2AIBqIgC7zCsyqvDgfKX/TbtesHrKpvBapBD2TPNE5gJU5mJXXAsspbZnfwMRvZ+5+E32zTle62MUZvI17ADvC/oZ4idFZiH73farx/Gv8yeHqwsCtPq7mbLMkynfE2vS9PGp+32dgeLzIxz1hb5bbXlg3A4/G9B6oM1nFJcjAEsIhIiSPQA6RsOm+6RVz+AczQfFd7n8oM0lr79LuHc0RrmFdgyMkixyn8QBSfWQtSVg6kx06EQJbPPnj8BPdQBww8BwAA",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*seen*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/zzcckn.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KHAN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "KHAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254740007567",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Marisel",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*Made By Marisel*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/avqa3c.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> *Marisel Made It*",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "254740007567",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
