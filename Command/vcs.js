const Discord = require("discord.js");
const tokens = require('./tokens.json');
const bot = new Discord.Client();

 bot.on('message', msg => {
	 
	 if (msg.content.startsWith(',vcs')) {
       let msgArray = msg.content.split(" ");
    let args = msgArray.slice(1);
    
  const Discord = require('discord.js')
  var xo02 = msg.guild.channels.find('name','vcs-erina');
  if(msg.channel.name !== 'vcs-erina') {
  return msg.channel.send("Cette commande peut etre executer que dans le salon #vcs-erinavous !.")
  }
if(msg.author.id === "295621584822075414") {
    let xoargs = msg.content.split(" ");
  xoargs.splice(0, 1);
  xoargs = xoargs.join(' ')
    const fondateur_vcs = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle("Fondateur VCS")
    .setAuthor("VCS-Erina", msg.guild.iconURL)
	.addField(` Envoyer depuis : `, msg.guild.name )
    .addField("Message", xoargs)
    .setFooter(msg.author.tag + " | sur le serveur : " + msg.guild.name + " id du serveur : (" + msg.guild.id + ").")
    .setThumbnail(msg.author.avatarURL)
    .setTimestamp()
    msg.delete()
    return bot.channels.findAll('name', 'vcs-erina').map(channel => channel.send(fondateur_vcs));
  }
  
  if(msg.author.id === "295621584822075414") {
    let xoargs = msg.content.split(" ");
  xoargs.splice(0, 1);
  xoargs = xoargs.join(' ')
    const dev_vcs = new Discord.RichEmbed()
    .setColor("#7fff00")
    .setTitle("Développeur VCS")
    .setAuthor("VCS-Erina", msg.guild.iconURL)
	.addField(` Envoyer depuis : `, msg.guild.name )
    .addField("Message", xoargs)
     .setFooter(msg.author.tag + " | sur le serveur : " + msg.guild.name + " id du serveur : (" + msg.guild.id + ").")
     .setThumbnail(msg.author.avatarURL)
    .setTimestamp()
    msg.delete()
    return bot.channels.findAll('name', 'vcs-erina').map(channel => channel.send(dev_vcs));
  }
  if(msg.author.id === "") {
    let xoargs = msg.content.split(" ");
  xoargs.splice(0, 1);
  xoargs = xoargs.join(' ')
    const chefsupport = new Discord.RichEmbed()
    .setColor("#ff6e00")
    .setTitle("Responsable des Support VCS")
    .setAuthor("VCS-Erina", msg.guild.iconURL)
	.addField(` Envoyer depuis : `, msg.guild.name )
    .addField("Message", xoargs)
     .setFooter(msg.author.tag + " | sur le serveur : " + msg.guild.name + " id du serveur : (" + msg.guild.id + ").")
    .setThumbnail(msg.author.avatarURL)
    .setTimestamp()
    msg.delete()
    return bot.channels.findAll('name', 'vcs-erina').map(channel => channel.send(chefsupport));
  }
   if(msg.author.id === "" && "") {
  var vcsbanned_embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTitle("Tu a été  banni du VCS !")
    .addField("*BANNI !!*", " :x: Vous avez été banni du VCS  veuiller contacter un administrateur ou un membre du support .")
    .setFooter(msg.author.username)
  return msg.channel.send(vcsbanned_embed)     
  }
  if(msg.author.id === "") {
    let xoargs = msg.content.split(" ");
  xoargs.splice(0, 1);
  xoargs = xoargs.join(' ')
    const support = new Discord.RichEmbed()
    .setColor("#0037ff")
    .setTitle("Support VCS-Erina")
    .setAuthor("VCS-Erina", msg.guild.iconURL)
	.addField(` Envoyer depuis : `, msg.guild.name )
    .addField("Message", xoargs)
    .setFooter(msg.author.tag + " | sur le serveur : " + msg.guild.name + " id du serveur : (" + msg.guild.id + ").")
     .setThumbnail(msg.author.avatarURL)
    .setTimestamp()
    msg.delete()
    return bot.channels.findAll('name', 'vcs-erina').map(channel => channel.send(support));
  }
  var https = msg.content.split("https").slice(1)[0];
    msg.delete();
  if(https) return msg.channel.send(` ** Les liens sont interdits ! Veuiller ne pas recommencer sous peine de bannisement du vcs. auteur du message : ${msg.author.tag} ** `)
  console.log("Publication d'un lien dans le VCS !!")
  let xoargs = msg.content.split(" ");
  xoargs.splice(0, 1);
  xoargs = xoargs.join(' ')
  const vcs_embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Utilisateur VCS-Erina")
    .setAuthor("VCS-Erina", msg.guild.iconURL)
	.addField(` Envoyer depuis : `, msg.guild.name )
    .addField("Message :", xoargs)
     .setFooter(msg.author.tag + " | sur le serveur : " + msg.guild.name + " id du serveur : (" + msg.guild.id + ").")
    .setThumbnail(msg.author.avatarURL)
    .setTimestamp()
  msg.delete()
  bot.channels.findAll('name', 'vcs-erina').map(channel => channel.send(vcs_embed));
  console.log("VCS : msg de " + msg.author.tag + " (" + msg.author.id + ") depuis le serveur " + msg.guild.name + " (" + msg.guild.id + ") : " + xoargs)
  }
  
  });
 
bot.login(tokens.d_token);