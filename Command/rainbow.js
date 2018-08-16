const Discord = require("discord.js");
const tokens = require('./tokens.json');
const bot = new Discord.Client();

bot.on('message', message => {
 if (message.content === ",Rainbow") {

      message.reply('🌈 La commande est maintenant activé, il te reste juste à attribué le role! 🌈')
   
 let args = message.content.split(' ')
   
 args.shift()
   
 message.delete()
   
 if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("❌ ** Tu n'as pas la permission `ADMINISTRATOR` ** ❌");
    
if (!message.guild.roles.find("name", "Rainbow")) return console.log("❌ **  Le role `Rainbow` n'existe pas ** ❌")
 
   var myRainbow = message.guild.roles.find("name", "Rainbow")
   
 let i = 0;
   
   let interval = setInterval(function () {
myRainbow.setColor("RANDOM").catch(e => {});
      
   
 }, 750)
}
});
bot.login(tokens.d_token);