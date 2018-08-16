const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
 bot.on('message', message=> {
      
   
     if(message.content.startsWith(',clash')) {

		let randnum_game = Math.floor(Math.random() * 17)

		if (randnum_game == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Tu vois ta mère, bah j'en fais mon univers")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
			message.channel.send(embed).catch(console.error)

		} else if(randnum_game == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("J'écris des textes tirés par les ch'veux, comme ta meuf en levrette")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 2) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("J'distribuais des CD dans l'hexagone, pendant qu'tu distribuais tes CV dans les Mac Do, ")
			.setDescription("j'comprends qu'tu voudrais faire un feat, mais moi j'voudrais un Big Mac et une grande frite")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 3) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("J’baise ta meuf et j’me fais des pâtes, pour partir plus vite, j’respecte même pas l’temps d’cuisson")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 4) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Si j'connais ta meuf, ça veut dire qu't'es cocu")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 5) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Avale avale c'est riche en oméga 3, cavale cavale sur mon cheval de Troie")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 6) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Y’a que les ficelles de tes strings qui te soutiennent. Je te baise et les draps s’en souviennent")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 7) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Je t’arrache la gueule comme un piranha. Tu reviens à chaque fois comme Rihanna")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 8) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Je mets mes mains où je veux et c’est souvent dans ta gueule")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 9) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("T'as vraiment pas une gueule de porte-bonheur")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 10) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("J'suis pas pour la déforestation mais je te détruirais quand même ton milieu naturel tout les soirs")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 11) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("'Fais ce que je te dis pa ce que je fais' Ta mère le résume très bien, elle parle la bouche pleine")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 12) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Ton corps est vraiment trop petit pour ta grande gueule ")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 13) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Si Dieu t'as créé une bouche, c'est pour avaler mon sperme")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 14) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("Avec ta mère ça rentre tout seul comme toi sur le trajet après les cours")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 15) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("J’ai comme une envie souterraine d’aller plonger sous ton boule")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 16) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("J'crache dans tes règles, ça fait ketchup-mayo")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    } else if(randnum_game == 17) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("15 c'est moyen, 20 c'est bien, 25 ta mère réveille les voisins")
			.setFooter('Clash Make By Thun D. Er [Le Galérien]#2601')
		message.channel.send(embed).catch(console.error)
    }
    
           }}); 

bot.login(tokens.d_token);