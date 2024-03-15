//base by DGXeon
//recode by Rapikz
//YouTube: @rapikgimangYT
//Instagram: Rapik_Gimang
//Telegram: t.me/6281312651566

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: zal_x_u" //ur yt chanel name
global.socialm = "IG: zql_x_u" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.botname = 'rizal -dev' //ur bot name
global.ownernumber = '6288210180505' //ur owner number
global.ownername = 'rizal-dev' //ur owner name
global.websitex = "wa.me/6288210180505"
global.wagc = "https://chat.whatsapp.com/CAaHTC4unnCCcZN70qRRgZ"
global.themeemoji = '🪀'
global.wm = "rizal-dev"
global.botscript = 'https://chat.whatsapp.com/CAaHTC4unnCCcZN70qRRgZ' //script link
global.packname = "rizal-dev"
global.author = "rizal-dev"
global.creator = "6288210180505@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6288210180505"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Succes'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})