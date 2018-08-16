const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
		bot.on("message", async message => {
	if(message.content.startsWith(prefix + "ban")) {
  message.delete();
    if (!message.member.hasPermission("MUTE_MEMBERS"))
         return message.reply("Sorry, you don't have the permissions for this !");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Stp mention un membre du server !");
    if(!member.bannable) 
      return message.reply("je peux pas ban this user! j'ai pas la permissions pour cela :thinking:");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Pas de raison ";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} je peux pas a cause : ${error}`));
    message.reply(`${member.user.tag} a été banni  by ${message.author.tag} because: ${reason}`);

}
});	




bot.login(tokens.d_token);