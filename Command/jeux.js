const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');

bot.on('message', function(message) {

  if(message.content.startsWith(',vrai')) {

		let randnum_game = Math.floor(Math.random() * 2)

		if (randnum_game == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("**Vrai** :wink:")
			.setFooter('Jeu du vrai ou faux')
			message.channel.send(embed).catch(console.error)

		} else if(randnum_game == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("**Faux** :wink:")
			.setFooter('Jeu du vrai ou faux')
			message.channel.send(embed).catch(console.error)
    }
    
    }

  if(message.content.startsWith(',faux')) {

		let randnum_game = Math.floor(Math.random() * 2)

		if (randnum_game == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("**Vrai** :wink:")
			.setFooter('Jeu du vrai ou faux')
			message.channel.send(embed).catch(console.error)

		} else if(randnum_game == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription("**Faux** :wink:")
			.setFooter('Jeu du vrai ou faux')
			message.channel.send(embed).catch(console.error)
    }
    
    }
    if(message.content.startsWith(',8ball')) {
      let randnum_game = Math.floor(Math.random() * 6)
  
      if (randnum_game == 0) {
  
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Totalement d'accord.")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
  
      } else if(randnum_game == 1) {
  
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je pense que non.")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 2) {
  
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je pense que oui.")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 3) {
  
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je suis en désaccord avec toi...")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 4) {
  
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("A toi d'en decider..")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }else if(randnum_game == 5) {
  
        var embed = new Discord.RichEmbed()
        .setColor("#320242")
        .setDescription("Je ne trouve pas une réponse à ta question...")
        .setAuthor(bot.user.username, bot.user.avatarURL);
        message.channel.send(embed).catch(console.error)
      }
      
      }
  if(message.content.startsWith(',pierre')) {

		let randnum_game = Math.floor(Math.random() * 3)

		if (randnum_game == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription(":dagger: | Résultat: ciseaux")
			.setFooter('Victoire de '+message.author.username+'! 🎉')
			message.channel.send(embed).catch(console.error)

		} else if(randnum_game == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription(":crossed_swords: | Résultat: pierre")
			.setFooter('Egalité !')
			message.channel.send(embed).catch(console.error)

    }	 else if(randnum_game == 2) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription(":skull_crossbones: | Résultat: feuille")
			.setFooter("Victoire du bot ! 🤖 ")
			message.channel.send(embed).catch(console.error)
    }
    
    }
  if(message.content.startsWith(',feuille')) {

		let randnum_game = Math.floor(Math.random() * 3)

		if (randnum_game == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription(":dagger: | Résultat: pierre")
			.setFooter('Victoire de '+message.author.username+'! 🎉')
			message.channel.send(embed).catch(console.error)

		} else if(randnum_game == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription(":crossed_swords: | Résultat: feuille")
			.setFooter('Egalité !')
			message.channel.send(embed).catch(console.error)

    }	 else if(randnum_game == 2) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription(":skull_crossbones: | Résultat: ciseaux")
			.setFooter("Victoire du bot ! 🤖")
			message.channel.send(embed).catch(console.error)
    }
    
    }
      if(message.content.startsWith(',ciseaux')) {

		let randnum_game = Math.floor(Math.random() * 3)

		if (randnum_game == 0) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription(":dagger: | Résultat: feuille")
			.setFooter('Victoire de '+message.author.username+'! 🎉')
			message.channel.send(embed).catch(console.error)

		} else if(randnum_game == 1) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription(":crossed_swords: | Résultat: ciseaux")
			.setFooter('Egalité !')
			message.channel.send(embed).catch(console.error)

    }	 else if(randnum_game == 2) {

			var embed = new Discord.RichEmbed()
			.setColor("#320242")
			.setDescription(":skull_crossbones: | Résultat: pierre")
			.setFooter("Victoire du bot ! 🤖 ")
			message.channel.send(embed).catch(console.error)
    }
    
    }
      if(message.content.startsWith(',piece')) {

		let randnum_game = Math.floor(Math.random() * 2)

		if (randnum_game == 0) {

message.channel.send(":triangular_flag_on_post: | C'est pile !")

		} else if(randnum_game == 1) {

message.channel.send(":triangular_flag_on_post: | C'est face !")
    
    }
      }
});

bot.login(tokens.d_token);