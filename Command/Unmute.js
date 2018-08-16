const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
	bot.on("message", async message => {
				
	  if (message.author.equals(bot.user)) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.channel.type === "dm") return message.channel.send("PLS execute la commande sur un channel et pas en privé!")  
		
var args = message.content.substring(prefix.length).split(" ")
		
	 switch (args[0].toLowerCase()) {
 case "unmute":
        var unmuterole = message.guild.roles.find("name", "Muted")
        if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("Tu peux pas **UNMUTE** quelqun !")
        var tounmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        if (!tounmute) return message.channel.send(" mentionne un user!")
        await (tounmute.removeRole(unmuterole.id))
        message.channel.send(`${tounmute} est Unmute Fait attention la prochaine fois !`)
	
	 }
});	




bot.login(tokens.d_token);