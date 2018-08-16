const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
 bot.on('message', message=> {
      
   
    if(message.content.startsWith(prefix + "hug")) {
		message.delete();
let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('Mentionne une personne a qui tu souhaite la bienvenue !. ').catch(console.error);
		const embed = new Discord.RichEmbed()
	  .setTitle("Un gros calins a ete demande !")
	  .addField(`${user.username}`, `Cette personne te fait des gros calins :heart: :hugging: !! `)
 .setImage(`https://78.media.tumblr.com/5dfb67d0a674fe5f81950478f5b2d4ed/tumblr_ofd4e2h8O81ub9qlao1_500.gif`)
.setColor("#e9ff00")
	 .setThumbnail(`${message.author.avatarURL}`)
	  .setFooter("ErinaBot Te fais plein de gros calins !!")
      message.channel.sendEmbed(embed);
		
    
           }}); 

bot.login(tokens.d_token);