const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
	bot.on('message', msg => {
		
if (msg.content.startsWith(prefix + '8ème')) {
	 var groupeA = new Discord.RichEmbed()
            .setTitle("Foot : 8ème final / Match :")
            .addField("1er GroupeC VS 2ème GroupeD", "Samedi 30 juin 16h" )
			.addField("Diffusion sur : ", "TF1 et BeinSport" )
            .addField("Uruguay VS Portugal", "Samedi 30 juin 20h")
			.addField("Diffusion sur : ", "TF1 et BeinSport" )
            .addField("Espagen VS Russie", "Dimanche 1er juillet 16h")
			.addField("Diffusion sur : ", "BeinSport" )
           .addField("1er GroupeD VS 2ème GroupeC", "Dimanche 1er juillet 20h")
			 .addField("Diffusion sur : ", "TF1 et BeinSport" )
          .addField("1er GroupeE VS 2ème GroupeF", "Lundi 2 juillet 16h")
			 .addField("Diffusion sur : ", "BeinSport" )
         .addField("1er GroupeG VS 2ème GroupeH", "Lundi 2 juillet 20h")
			  .addField("Diffusion sur : ", "TF1 et BeinSport" )
          .addField("1er GroupeF VS 2ème GroupeE", "Mardi 3 juillet 16h")
			 .addField("Diffusion sur : ", "BeinSport" )
         .addField("1er GroupeH VS 2ème GroupeG", "Mardi 3 juillet 20h")
			 .addField("Diffusion sur : ", "TF1 et BeinSport" )
        .addField("**LE TABLEAU SERA COMPLETE**", "Ne vous inquité pas :) " )
		 .setFooter(`${msg.author.username}`)
            .setTimestamp()
            .setColor("RANDOM")
          msg.channel.sendEmbed(groupeA)
}
if (msg.content.startsWith(prefix + 'france')) {
	let args = msg.content.split(" ").slice(1);
			let thingToEcho = args.join(" ")
			
	 var france = new Discord.RichEmbed()
	
		   .setTitle("Coupe Du Monde 2018")
            .addField("Si tu a fait cette Command c'est que tu est pour la france !!", " :flag_fr: " )
			.addField("Tu a dit une phrase pour la france :" , thingToEcho )
		 .setFooter(`${msg.author.username}`)
            .setTimestamp()
            .setColor("RANDOM")
          msg.channel.sendEmbed(france)

}	

});
bot.login(tokens.d_token);