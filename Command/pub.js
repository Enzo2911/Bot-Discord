const Discord = require("discord.js");
const tokens = require('./tokens.json');
const bot = new Discord.Client();

 bot.on('message', msg => {
	 
	 if (msg.content.startsWith(',pub-vc')) {
      const embed = new Discord.RichEmbed()
	  .setTitle("Pub Du Serveur Virtual-Community")
	  .addField("Quoi tu connais toujours pas Virtual Community ?!")
	  .addField("Viens alors ! Il te suffit de cliquer sur le Titre Pour rejoindre se server")
          .addField(" Tout d'abord ", "Bonjour/Bonsoir !")
	  .addField(" Tu dois certainement te demander à quoi sert Virtual Community :thinking: ? ", "-----------------------------------------------------")
	  .addField(" Virtual Community", "rassemble tous les joueurs discord !")
	  .addField("Tu peux y trouver tout se qu'il te faut", " ! Des dévloppeur, Des Graphistes, et encore pleins d'autre choses ! ")
	  .addField("Si toi même tu à un bon potentiel en : ", " job virtuel (c'est à dire Graphiste/Dev/...) ")
	  .addField("je t'invite à MP un staff pour qu'il puisse faire un article sur toi !", "By Troge")
	  .setColor("#ff0000")
	  .setURL('https://discord.gg/vK8hMKF')
	  .setFooter("Partenaire de ErinaBot")
      msg.channel.sendEmbed(embed);
 }});
bot.login(tokens.d_token);