const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const superagent = require("superagent")
const tokens = require('./tokens.json');
bot.on("message",  msg => {
  
  if(msg.content.startsWith(prefix + "commandes")) {
  msg.delete();
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`${msg.author.username} `+ 'Bienvenue sur le Panel du bot') 
  .addField( "----------Panel-d'accueil---------",'Different Panel Possible = ')
  .addField(':soccer: jeux  ',` \`\`\`js\n,jeux + Affiche les différente command disponible\n\`\`\``)
  .addField(':eyes: modérations',` \`\`\`js\n,modérations + Affiche les différente command disponible\n\`\`\``)
  .addField(':dizzy_face: autres',` \`\`\`js\n,autres + Affiche les différente command disponible\n\`\`\``)
  .addField(':muscle:  Partenaire',` \`\`\`js\n,partenaire + Affiche les différente command disponible demander par les partenaire.\n\`\`\``)
  .addField('---------------------------------------------','---------------------------------------------' )
  msg.channel.send(embed)
}
if(msg.content.startsWith(prefix + "jeux")) {
  msg.delete();
  var embed = new Discord.RichEmbed()
   .setColor('RANDOM')
  .setTitle(`${msg.author.username} `+ 'Bienvenue sur le Panel du bot') 
  .addField( "----------Panel-de-jeux---------",'Commandes = ')
  .addField('pierre ,ciseaux ,feuille', ` \`\`\`js\nfaire l'une des 3 command pour jouer a pierre feuille ciseaux contre le bot ( ,pierre ou ,ciseaux ou ,feuille. ) \n\`\`\``)
 .addField(',faux ou ,vraie', ` \`\`\`js\n ,faux ou ,vraie + la question poser \n\`\`\``)
 .addField(',8ball', ` \`\`\`js\n,8ball + la question poser  \n\`\`\``)
 .addField(',piece', ` \`\`\`js\n,piece cela va faire une sorte de pile ou face  \n\`\`\``)
 .addField('---------------------------------------------','---------------------------------------------' )
  msg.channel.send(embed)
}
if(msg.content.startsWith(prefix + "modérations")) {
  msg.delete();
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`${msg.author.username} `+ 'Bienvenue sur le Panel du bot') 
  .addField( "----------Panel-de-modérations---------",'Commandes = ')
  .addField(',serverlist', ` \`\`\`js\n affiche les serveur du bot et créé une invite au passage \n\`\`\``)
  .addField(',purge', ` \`\`\`js\n ,purge + le nombre de message que tu veux supprimer \n\`\`\``)
  .addField(',report', ` \`\`\`js\n ,report ( affiche une commande d aide ). \n\`\`\``)
  .addField(',mute', ` \`\`\`js\n ,mute + mentionne la personne + reason !. \n\`\`\``)
  .addField(',unmute', ` \`\`\`js\n ,unmute + mentionne la personne + reason !. \n\`\`\``)
  .addField(',kick', ` \`\`\`js\n ,kick + mentionne la personne  !. \n\`\`\``)
  .addField(',ban', ` \`\`\`js\n ,ban + mentionne la personne + reason !. \n\`\`\``)
  .addField(',banid', ` \`\`\`js\n ,banid + mentionne la personne ou son id !. \n\`\`\``)
  .addField(',pseudo', ` \`\`\`js\n ,pseudo remet les pseudo par default pour tout le monde (si jamais hack)!. \n\`\`\``)
  .addField(',addrole', ` \`\`\`js\n ,help addrole affiche le panel pour addrole !. ( ,addrole + mentionne + nom du role )  \n\`\`\``)
 .addField(',unban', ` \`\`\`js\n ,unban + id de la personne qui été bannit  \n\`\`\``)
  .addField('---------------------------------------------','---------------------------------------------' )
  msg.channel.send(embed)
}
if(msg.content.startsWith(prefix + "autres")) {
  msg.delete();
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`${msg.author.username} `+ 'Bienvenue sur le Panel du bot') 
  .addField( "----------Panel-autres---------",'Commandes = ')
  .addField(',dire  ',` \`\`\`js\n,dire + Le message que tu veux que le bot dise\n\`\`\``)
  .addField(',dog  ',` \`\`\`js\n,dog et sa affichera la photo d'un chien\n\`\`\``)
  .addField(',image ',` \`\`\`js\n,image et sa affichera une image aléatoire \n\`\`\``)
  .addField(',cat  ',` \`\`\`js\n,cat et sa affichera la photo d'un chat\n\`\`\``)
  .addField(',cherche  ',` \`\`\`js\n,cherche + le mot ou la phrase que l'on veut chercher sur google. \n\`\`\``)
  .addField(',bot  ',` \`\`\`js\n,bot affiche les détail du bot \n\`\`\``)
  .addField(',server  ',` \`\`\`js\n,server affiche les détail du serveur \n\`\`\``)
  .addField(',scam ',` \`\`\`js\n,scam + mentionne une personne. \n\`\`\``)
  .addField(',musicpanel ',` \`\`\`js\n,musicpanel montre le panel pour ecouter la music. \n\`\`\``)
   .addField(',wiki ',` \`\`\`js\n,wiki + le nom de la recherche. \n\`\`\``)
   .addField(',vcs ',` \`\`\`js\n,vcs + ton message. \n\`\`\``)
   .addField(',vcscreate ',` \`\`\`js\n,vcscreate ( si tu a pas de salon vcs ) .  \n\`\`\``)
     .addField(",tradenfr",  `\`\`\`Traduction Anglais ==> Français ! \n\`\`\``) 
                    .addField(",tradfren", ` \`\`\`js\nTraduction Français ==> Anglais ! \n\`\`\``)
                   
                    .addField(",tradesfr", ` \`\`\`js\nTraduction Espagnol ==> Français ! \n\`\`\``)
                    .addField(",tradfres", ` \`\`\`js\nTaduction Français ==> Espagnol ! \n\`\`\``)
                    .addField(",tradesen", ` \`\`\`js\nTraduction Espagnol ==> Anglais ! \n\`\`\``)
 .addField(",tradenes", ` \`\`\`js\nTaduction Anglais ==> Espagnol ! \n\`\`\``)            
                .addField(",tradhelp", ` \`\`\`js\nAffiche le panel aide traduction ! \n\`\`\``)            
               
  .addField('---------------------------------------------','---------------------------------------------' )
  msg.channel.send(embed)
}
if(msg.content.startsWith(prefix + "partenaire")) {
  msg.delete();
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`${msg.author.username} `+ 'Bienvenue sur le Panel du bot') 
  .addField( "----------Panel-Partenaire---------",'Commandes = ')
  .addField(':one: Partenaire Virtual Community ',` \`\`\`js\n,pub-vc Cela affichera la pub \n\`\`\``)
  .addField('**POUR UNE DEMANDE DE PARTENARIAT**',`Conctacter le créateur par message privé `)
   msg.channel.send(embed)
} 

});
bot.login(tokens.d_token);