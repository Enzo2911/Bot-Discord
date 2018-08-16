const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const superagent = require("superagent")
const encode = require("strict-uri-encode")
const tokens = require('./tokens.json');
bot.on("message", async msg => {
	  if (msg.author.equals(bot.user)) return;
    if (!msg.content.startsWith(prefix)) return;
    if (msg.channel.type === "dm") return msg.channel.send("PLS execute la commande sur un channel et pas en privé!")
var args = msg.content.substring(prefix.length).split(" ")
	 switch (args[0].toLowerCase()) {
		  
 case "cherche":
 msg.delete();
 let question = encode(args.join(" ").slice(7))
			 msg.channel.send(" Voici la recherche qui a été demander :" )
			let link = `https://www.lmgtfy.com/?q=${question}`
		msg.channel.send(link).catch(e => {
			msg.channel.send("wow On dirait que je ne peux pas envoyer de liens ici !")
		})
		
	 
}}); 
bot.login(tokens.d_token);