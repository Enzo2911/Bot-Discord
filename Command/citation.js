const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
const superagent = require("superagent")

bot.on("message", async msg => {
	  if (msg.author.equals(bot.user)) return;
    if (!msg.content.startsWith(prefix)) return;
    if (msg.channel.type === "dm") return msg.channel.send("PLS execute la commande sur un channel et pas en privé!")
var args = msg.content.substring(prefix.length).split(" ")
	 switch (args[0].toLowerCase()) {

		 case "citation":
		 msg.delete();
		 	let {body} = await superagent
		.get(`https://talaikis.com/api/quotes/random/`);
		var embed = new Discord.RichEmbed()
		 msg.channel.send(body.quote)
		msg.channel.send.catch(e => {
			msg.channel.send("WoW jpeux pas te montrer la citation :sob:")
		})

		
	 
}}); 
bot.login(tokens.d_token);