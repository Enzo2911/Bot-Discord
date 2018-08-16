const Discord = require("discord.js");
var prefix = (",");
const bot = new Discord.Client();
const tokens = require('./tokens.json');
const afk = require('./afkset.json');
 bot.on('message', message => {
	     const fs = require("fs");
      var msg = message;
      
      let afk = JSON.parse(fs.readFileSync("./afkset.json", "utf8"));
      if (message.content.startsWith(prefix + "remafk")){
      if (afk[msg.author.id]) {
      delete afk[msg.author.id];
      if (msg.member.nickname === null) {
      msg.channel.send("```css\nJ'ai enlever votre [ AFK ] !! ```");
      }else{
      msg.channel.send("```css\nJ'ai enlever votre [ AFK ] !! ```");
      }
      fs.writeFile("./afkset.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
      }else{
      msg.channel.send("```css\nErreur ! Tu es déjà AFK ```");
      }
      }
      
   if (message.content.startsWith(prefix + "afk")||message.content === prefix + "afk") {
      if (afk[message.author.id]) {
      return message.channel.send("```css\n Tu es déjà AFK; ! ```");
      }else{
      let args1 = message.content.split(" ").slice(1);
      if (args1.length === 0) {
      afk[message.author.id] = {"reason" : true};
      message.delete();
      message.channel.send(`tu es désormais AFK, tape **${prefix}remafk** pour enlever ton AFK`);
      }else{
      afk[message.author.id] = {"reason" : args1.join(" ")};
      message.delete();
      message.channel.send(`tu es désormais AFK, tape **${prefix}remafk** pour enlever ton AFK`);
      }
      fs.writeFile("./afkset.json", JSON.stringify(afk), (err) => { if (err) console.error(err);});
      }
      }
          
          var mentionned = message.mentions.users.first();
      if(message.mentions.users.size > 0) {
      if (afk[message.mentions.users.first().id]) {
      if (afk[message.mentions.users.first().id].reason === true) {
      message.channel.send(`**${mentionned.username}** est **AFK**: __*sans raison*__`);
      }else{
      message.channel.send(`**${mentionned.username}** est **AFK**: __*${afk[message.mentions.users.first().id].reason}*__`);
      }
      }
      }

      });

 
bot.login(tokens.d_token);