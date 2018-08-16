const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
 bot.on('message', message=> {
      
   
    if(message.content.startsWith(prefix + "punch")) {
		message.delete();
let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('Mentionne une personne a qui tu souhaite la bienvenue !. ').catch(console.error);
		const embed = new Discord.RichEmbed()
	  .setTitle("Un gros Punch est requis !")
	  .addField(`${user.username}`, `Cette personne t'a Punché :confounded:  !! `)
 .setImage(`https://orig04.deviantart.net/213d/f/2017/076/d/d/smash_by_nocturnbros-db2ld27.gif`)
.setColor("#e9ff00")
	 .setThumbnail(`${message.author.avatarURL}`)
	  .setFooter("Commande demandé par Nikisynai#0960 !!")
      message.channel.sendEmbed(embed);
		
    
           }}); 

bot.login(tokens.d_token);