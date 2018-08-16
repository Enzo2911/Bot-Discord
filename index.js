const Discord = require("discord.js");
const chalk = require("chalk");
const fs = require('fs');
const cat = require("./Command/cat.js");
const dog = require("./Command/dog.js");
const citation = require("./Command/citation.js");
const cherche = require("./Command/cherche.js");
const commandes = require("./Command/commandes.js");
const jeux = require("./Command/jeux.js");
const shadow = require("./Command/reset-shadow.js");
const purge = require("./Command/purge.js");
const report = require("./Command/report.js");
const clash = require("./Command/clash.js");
const punch = require("./Command/punch.js");
const mute = require("./Command/Mute.js");
const unmute = require("./Command/Unmute.js");
const afk = require("./Command/afk.js");
const hug = require("./Command/hug.js");
const kick = require("./Command/kick.js");
const ban = require("./Command/ban.js");
const addrole = require("./Command/addrole.js");
const bvn = require("./Command/bvn.js");
const sondage = require("./Command/sondage.js");
const créateur = require("./Command/createur.js");
const banid = require ("./Command/banid.js")
const wiki = require ("./Command/Wiki.js")
const unban = require ("./Command/Unban.js")
const image = require ("./Command/Image.js")
const Foot = require ("./Command/Foot.js")
const vcs = require ("./Command/vcs.js")
const traduction = require ("./Command/traduction.js")
const partenaire = require ("./Command/pub.js")
const userinfo = require ("./Command/userinfo.js")
const rainbow = require ("./Command/rainbow.js")
const resete = require ("./Command/reset.js")
const bot = new Discord.Client();
const stream = require('stream');
var prefix = (",");
var pre = ",";
const owner = '461243335420411926';

bot.on('ready', () => {

bot.user.setPresence({ game: { name: "Info = [,commandes]  | "  + `${bot.guilds.size}` + " servers" }
                     })*
  
console.log("--------------------------------------");
console.log('--> ' + (chalk.yellow('Bot By ENZO2911 ')) +' \n--> ' + (chalk.green('Connecter avec succ�s  ')) + ' \n--> ' + (chalk.magenta('Name Bot:              '))+ `[ ${bot.user.tag} ]` + ' \n--> '+(chalk.magenta('Le pr�fix actuel:      ')) +  `[ ${prefix} ]`  + '\n--> '+ (chalk.magenta('Nombre d\'utilisateurs: ')) + `[ ${bot.users.size} ]` + '\n--> '+ (chalk.magenta('Nombre de salons:      ')) + `[ ${bot.channels.size} ]` + '\n--> '+ (chalk.magenta('Nombre de serveurs:    ')) + `[ ${bot.guilds.size} ]`);
console.log("--------------------------------------");
console.log('--> ' + (chalk.green('Pr�t !')));
console.log('______________________________________');
  
bot.guilds.forEach(guild => { 
var invite = bot.guilds.find("id", guild.id)

  })
	
});
bot.on('guildMemberRemove', member => {

  const welcomechannel = member.guild.channels.find('name', 'accueil') 
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(`:smile: <@${member.user.id}> C est pas grave, Nous le pension tous mais il etait con !! `)

  
    });
 
  bot.on("guildDelete", guild => {

       var embed = new Discord.RichEmbed()
     .setDescription(`Haddock.store ne fais plus parti de ce discord la  : ${guild.name} /  il y a avait  ${guild.memberCount} membres`)
    .setColor('RANDOM');

  bot.channels.find('id',"462767425117618197").send({embed});


});
	
bot.on("guildCreate", guild => {

  if(guild.member(bot.user).hasPermission("SEND_MESSAGES")){


        let sicon = guild.iconURL;
          var date = guild.createdAt;
       var embed = new Discord.RichEmbed()
          .setTitle("Un nouveau serveur vient d'ajouté ErinaBot !")
        .setColor("RANDOM")
        .setThumbnail(sicon)
        .addField("`Nom du serveur ¬`", guild.name, false)
        .addField("`ID du Serveur ¬`", guild.id, false)
        .addField("`Createur du Serveur ¬`", guild.owner, false)
        .addField("`Serveur créé le ¬`", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes(), true)
        .addField("`Utilisateurs ¬`", guild.memberCount, false)
        .addField("`Région ¬`", "Europe de l'Ouest", false)
        .addField("`Role du bot ¬`", "No Admin", true)
        .setFooter(`https://discord.gg/Null`)
  .setColor('RANDOM');

  bot.channels.find('id',"462767425117618197").send({embed});
   
  } 
else  if(!guild.member(bot.user).hasPermission("CREATE_INSTANT_INVITE")){
    var invite = guild.channels.find("id", guild.channels.random().id);
    invite.createInvite().then(invite => {
        let sicon = guild.iconURL;
      	var date = guild.createdAt;
       var embed = new Discord.RichEmbed()
          .setTitle("Un nouveau serveur vient d'ajouté ErinaBot !")
        .setColor("RANDOM")
        .setThumbnail(sicon)
        .addField("`Nom du serveur ¬`", guild.name, false)
        .addField("`ID du Serveur ¬`", guild.id, false)
        .addField("`Createur du Serveur ¬`", guild.owner, false)
        .addField("`Serveur créé le ¬`", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" à "+date.getHours()+":"+date.getMinutes(), true)
        .addField("`Utilisateurs ¬`", guild.memberCount, false)
        .addField("`Région ¬`", "Europe de l'Ouest", false)
        .addField("`Role du bot ¬`", "Adminisrateur", true)
       .setFooter(`https://discord.gg/${invite.code}`)
  .setColor('RANDOM');
})
  bot.channels.find('id',"462767425117618197").send({embed});
 
   
  }
  });
bot.on('message', msg => {
	
if (msg.content.startsWith(prefix)) {
		if (msg.content.startsWith(prefix)) {
		if(msg.author.bot) return; 
		try {
			var splited_msg = msg.content.slice(prefix.length).split(" ");
			var command = splited_msg[0];
			var parameters = splited_msg.slice(1)
		} catch (error) {
			return
		};
       
        try {
if (["restart"].includes(command)) {
    msg.delete();
  if(msg.author.id !== owner ) return;
       msg.delete().then(() => process.exit(1))
}
if (["bot"].includes(command)) {
  msg.delete();
const sicon = bot.user.displayAvatarURL
    let serverembed = new Discord.RichEmbed()
    .setTitle(">>> Clic ICI pour me mettre dans ton serveur<<<")
      .addField("Actuallement Je suis dans : ",`${bot.guilds.size} serveur :sweat_smile:  mais moi dans le tien :thinking:` )
    .addField("mon prefix est : ",`${prefix}`)
             .addField("Nombre d'utilisateur",`${bot.users.size} utilisateur :smile:`)
		.addField("Role le plus éléver sur ce serveur", msg.member.highestRole.name)
			 .addField("Créé le", msg.guild.createdAt)
.addField("Rejoins le", msg.member.joinedAt)
 .addField(`J'ai `,` ${bot.channels.size} salons aux totale `)
       .setURL('https://discordapp.com/oauth2/authorize?client_id=461243335420411926&permissions=-2&scope=bot')
     .setColor("#00FF00")
    .setThumbnail(sicon)
      msg.channel.send(serverembed).catch(console.error);
        }
		if (["serverlist"].includes(command)) {
        if(msg.deletable) msg.delete();
		if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("Vous n'avez pas la permission D'afficher Les different ** serveur du bot ** !!");
  bot.guilds.forEach(guild => { 
	 var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
     invite.createInvite().then(invite => msg.channel.send(`Connecté sur : ${guild.name} | ${guild.memberCount} membres | Son Invitation : ${invite}`));
  }).catch(console.error);
}
if (["dire"].includes(command)) {
	const args = msg.content.slice().trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const sayMessage = args.join(" ");
    msg.delete().catch(O_o=>{}); 
    msg.channel.send(sayMessage);
  }
  if (["server"].includes(command)) {

  msg.delete();
          let sicon = msg.guild.iconURL;
                	var date = msg.guild.createdAt;
          let serverembed = new Discord.RichEmbed()

          .setDescription("Info du Serveur", msg.guild.name)
          .setColor("#ff0033")
          .setThumbnail(sicon)
          .addField("Nom du serveur :", msg.guild.name)
          .addField("`Createur du Serveur :`", msg.guild.owner)
          .addField("Créé le :", date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+" � "+date.getHours()+":"+date.getMinutes())
          .addField("Total des membres :", msg.guild.memberCount)
          .addField("ID du Serveur :", msg.guild.id)
          
      
          return msg.channel.send(serverembed);
        }
		 if (["scam"].includes(command)) {
 msg.delete();
let user = msg.mentions.users.first();

if (msg.mentions.users.size < 1) return msg.reply('Mentionne une personne :) :smile: ').catch(console.error);
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(`${msg.author.avatarURL}`)
      .addField(`${user.username}`, `**Il PARAIT QUE TU SCAM ? -_- :smile:** PREUVE QUE TU SCAM PLUS ? :thinking:**`);
      msg.channel.sendEmbed(embed);

}
if (["pseudo"].includes(command)) {
      if (!msg.guild.member(msg.author).hasPermission('ADMINISTRATOR'))
    return msg.channel.send(":x: Vous n'avez pas la permission Administrateur dans ce serveur.")    
        if(msg.deletable) msg.delete();
            msg.guild.members.forEach(member => {
                if(member.setNickname(" "));
                
            })

}

    	else {
            console.log("[LOG] ["+msg.author.tag+" = "+msg.author.id+"] ["+msg.guild.name+"] La commande "+command+" a été effectuer.")
            bot.channels.find('name',"logs").send(" [LOG] ["+msg.author.tag+" = "+msg.author.id+"] ["+msg.guild.name+"] La commande "+command+" a été effectuer.");
          }
    
            } 	
    
            catch (error) {
              console.log("[LOG] ["+msg.author.tag+" = "+msg.author.id+"] "+msg.content)
               bot.channels.find('name',"logs").send(" [LOG] ["+msg.author.tag+" = "+msg.author.id+"] "+msg.content);
              console.log(error) // Capturer les erreurs pour garder le bot en ligne 
            }
          }
}

});

bot.login("NDYyNjAzNjgyNDU5MTU2NDky.DhpEiw.CZsvHGAYFullj8E_TBXIFURUuuE");   