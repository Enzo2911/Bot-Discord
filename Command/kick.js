const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
bot.on("message", msg => {
   
	if (msg.content.startsWith(",kick")) {
      msg.delete();
      if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("Vous n'avez pas la permission **KICK** !!");
  
        var member= msg.mentions.members.first();
        // Kick go mdrr
        member.kick().then((member) => {
            // good msg
            msg.channel.send(":wave: " + member.displayName  + " a été kick par un administrateur kicked :point_right: ");
        }).catch(() => {
             // fail msg
            msg.channel.send("ta pas la permission" );
        });
    }
});	




bot.login(tokens.d_token);