const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
 bot.on('message', msg => {
      

if(msg.content.startsWith(",sondage")){
    msg.delete();
			 if (msg.member.hasPermission("BAN_MEMBERS")) {
			let args = msg.content.split(" ").slice(1);
			let thingToEcho = args.join(" ")
			var embed = new Discord.RichEmbed()
			    .setDescription('Petit Sondage')
                            .addField( thingToEcho , "Répondre par :white_check_mark: ou :x:")
				.setColor("RANDOM")
				.setTimestamp()
msg.channel.sendEmbed(embed)
			
     
			.then(function (msg){
        msg.react("✅")
        msg.react("❎")
       	
			}).catch(function(){
				
			});
			msg.delete()
		}else{
			return msg.reply("Tu n'as pas la permission de crée un sondage !.")
        }
    }
  

});

bot.login(tokens.d_token);