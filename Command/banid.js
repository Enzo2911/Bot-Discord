const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");

const tokens = require('./tokens.json');
bot.on("message",message => {

  if(message.content.startsWith(",banid")) {
message.delete();
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
    return message.channel.send(":x: Vous n'avez pas la permission Administrateur dans ce serveur.")
     let args = message.content.split(' ').slice(1)
          if (!args[0]) return message.channel.send(`**${message.author.username} ,** Vous devez spécifiez l'id de l'utilisateur.`).catch(console.error)
          message.channel.send(`**${message.author.username} ,**banissement de <@${args[0]}> avec succes.`)
  
          message.guild.ban(args[0]).catch(error=>{
          message.channel.send(`**${message.author.username} ,** je ne peut pas ban une personne qui a les roles admin`)

          })
  }
});

bot.login(tokens.d_token);