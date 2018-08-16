const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
 bot.on('message', message=> {
      
   
    if(message.content.startsWith(prefix + "bvn")) {
		message.delete();
let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('Mentionne une personne a qui tu souhaite la bienvenue !. ').catch(console.error);
		const embed = new Discord.RichEmbed()
	  .setTitle("Bienvenue a Toi Sur le Serveur")
	  .addField(`${user.username}`, `Cette personne te souhaite la Bienvenue  :hugging: !`)
	  .setColor("#e9ff00")
	 .setThumbnail(`${message.author.avatarURL}`)
	  .setFooter("ErinaBot Te souhaite la Bienvenue")
      message.channel.sendEmbed(embed);
		
    
           }}); 

bot.login(tokens.d_token);