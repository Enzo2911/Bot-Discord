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
		  
case "dog":
msg.delete();
		let {body} = await superagent
		.get(`http://random.dog/woof.json`);
		var embed = new Discord.RichEmbed()
			.setAuthor("Voici un dog Pour toi :heart_eyes: !")
			.setImage(body.url)
			.setFooter(`Coded by Enzo`)
			.setColor("RANDOM")
		msg.channel.send(embed).catch(e => {
			msg.channel.send("WoW jpeux pas te montrer une photo de chiens dsl :sob:")
		})
	 
}}); 
bot.login(tokens.d_token);