const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const superagent = require("superagent")
const tokens = require('./tokens.json');
bot.on("message", async msg => {
	  if (msg.author.equals(bot.user)) return;
    if (!msg.content.startsWith(prefix)) return;
    if (msg.channel.type === "dm") return msg.channel.send("PLS execute la commande sur un channel et pas en privé!")
var args = msg.content.substring(prefix.length).split(" ")
	 switch (args[0].toLowerCase()) {
		  
case "cat":
msg.delete();
		let {body} = await superagent
			 .get(`http://aws.random.cat/meow`);
			 var embed = new Discord.RichEmbed()
				 .setAuthor("Voici un cat pour toi :smile: !")
				 .setImage(body.file)
				 .setFooter(`Coded by Enzo`)
				 .setColor("RANDOM")
				 msg.channel.send(embed).catch(e => {
					 msg.channel.send("Wow jpeux pas te montrer cette photo de chat dsl poto :sob: !")
					 	})
 
	 
}}); 
bot.login(tokens.d_token);