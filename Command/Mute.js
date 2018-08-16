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
 case "mute":
        if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send("Ta pas la permisssion de **MUTE**!")
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply("STP mentionne un utilisateur valide !");
        if(tomute.hasPermission("MUTE_MEMBERS")) return message.reply("Je peux pas mute un admin du serveur!");
        let muterole = message.guild.roles.find(`name`, "Muted");
        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                name: "Muted",
                color: "#00FFOO",
                permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
        } catch(e){
        console.log(e.stack);
            }
        }
        await(tomute.addRole(muterole.id));
        message.channel.send(`${tomute} a été mute !`)
	 }
});	




bot.login(tokens.d_token);