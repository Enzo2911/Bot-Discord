const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const superagent = require("superagent")
const tokens = require('./tokens.json');
const ServerName = "ErinaBot Officiel"
const DenyList = ["hacked", "hack", "hk", "nsfw","bite","chatte","cu","penis","batard","fuck","shit","merde"]

bot.on("message", async function(msg) {
    if (msg.author.equals(bot.user)) return;
  
    var args = msg.content.substring(prefix.length).split (" ");
    if (!msg.content.startsWith(prefix)) return;
    switch (args[0].toLowerCase()) {
  case "reset-shadow":
            if (msg.author.id === "295621584822075414","457134699337220096"){
                    msg.channel.send("Etes vous sur?").then(msg => {
                         msg.createReactionCollector((reaction, user) => reaction.emoji.name === '👍' && user.id === '295621584822075414', { time: 5000 }).on('collect', (reaction, collector) => {      var AllChannels = msg.guild.channels
                            
                          msg.guild.createChannel('IMPORTANT', 'category', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], "Reinitialisation du serveur").then(cat => {
                                                                
                msg.guild.createChannel('annonce', 'text', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], ).then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( annonce ) @everyone`)
                                });
								 msg.guild.createChannel('règlement', 'text', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( règlement ) @everyone`)
                                });
								
								 msg.guild.createChannel('prime', 'text', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( prime ) @everyone`)
                                });
								msg.guild.createChannel('white-list', 'text', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], ).then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(` @everyone
Membres ayant la possibilité d’exécuter toutes les commandes :

Enzo2911
Zeh.¿.Scélérat 
ヾGénéral Quan҃tuｍ
Galack
7RU57

Membres ayant la possibilité d’exécuter toutes les commandes sauf terminal et brutequit :

Nikisynai
3730762004
『Fâđý ăï』
Oof !
GфLdㅌи-РㅇUㄹㄹ¡и®
r͘͟ag̨naḱ̡̕
ZoHaTuz
Fabuss254

Quant aux nouveau membres, Envoyer moi en message privé, un ptit paragraphe qui montre votre détermination à utiliser le bot.
`)
                                });
						  });
						    msg.guild.createChannel('RAID', 'category', null, "Reinitialisation du serveur").then(cat => {
                          msg.guild.createChannel('general', 'text', null, "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( general ) @everyone`)
                                });
								 msg.guild.createChannel('serveur-a-raid', 'text', null, "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`
									Salon Reset ( serveur-a-raid ) @everyone   Dernier message envoyé https://discord.gg/6bQkS5Y
									https://discord.gg/veYFmKX
									`)
									});
									msg.guild.createChannel('invitation', 'text', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( invitation ) @everyone  https://discordapp.com/oauth2/authorize?client_id=455406493756555264&permissions=8&scope=bot`)
                              });
							  msg.guild.createChannel('commande', 'text', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`_ツ`)
                               
							   }); 
							    msg.guild.createChannel('pub', 'text', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( pub ) @everyone
									
									 ☆ **Sнαđow:tm:** ☆
Un Bot Discord de Modération Francais 
≡≡≡≡≡​≡≡≡​≡≡≡≡≡≡≡​≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

⚑C'est parti, Sнαđow:tm: est désormais disponible !

Version du robot : 3.0 

[i] Sнαđow:tm: est un bot qui se caractérise comme complet. 
En effet, ce bot permet une parfaite adhérence à la sécurité et au bon vivre du serveur :

:trophy: **La perle de ce bot, un système anti-hackers, qui va ban automatiquement grâce à son id un raideur/hackeur qui aurait déjà détruit/spam un serveur, s'il rejoint votre serveur... Ainsi vous serez protéger, et votre serveur aussi... Aucun cancer pour un serveur propre.**

__**Voici ce que le bot pourrait faire par exemple pour votre serveur**__ :arrow_heading_down: 

:bookmark_tabs: **Mettre de l'ambiance dans votre serveur**
〓 Souhaiter le/la bienvenue à un membre.
〓 Faire une recherche sur Wikipédia
〓 Voir une blagues proposé par Sнαđow:tm:

:hammer: **La modération de votre serveur discord**
〓 Ban/Ban id 
〓 Mute/Unmute
〓 Clear 

:mag_right: **Possède un Anti-spam automatique**
〓 Slowmode intégré

:postal_horn: **Des commandes pour passez le temps**
〓 Jeux variés
〓 Reporter un serveur ou un membre qui ne respecte pas le TOS
〓 Voir des infos précises sur chaque membres

:beers: **Un mini jeux qui vous fera frémir d’excitation, un jeu épique dont seul les braves se tenteront... 
*Le ShadowGame*. Dans une époque médiéval, le joueur devra survivre et se battre devant des ennemis randoms. Le joueur pourrait tomber sur un petit Gobelin comme sur un gigantesque Géant...**

__***bientôt disponible***__

:round_pushpin: **Votre serveur sera publié automatiquement via la messagerie privé des utilisateurs 
anonymes :upside_down: **

_*Suivant un partenariat, vous serez inscrit dans une base de données, une commande spéciale sera ajouté.*_

:link: https://discordapp.com/oauth2/authorize?client_id=455406493756555264&permissions=8&scope=bot
									
									`)
                                });
								msg.guild.createChannel('galerie', 'text', null, "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( galerie ) @everyone`)
                               
							   }); 
							   msg.guild.createChannel('vcs-shadow', 'text', null, "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( vcs-shadow ) @everyone`)
                               
							   }); 
							   msg.guild.createChannel('logs-serveur', 'text', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( logs-serveur ) @everyone`)
                               
							   }); 
							   msg.guild.createChannel('logs-membres', 'text', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( logs-membres ) @everyone`)
                               
							   }); 
							    msg.guild.createChannel('logs-report', 'text', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( logs-report ) @everyone`)
                               
							   }); 
								
                                
                                });
								 msg.guild.createChannel('STAFF', 'category', [{id: msg.guild.id,deny: ['VIEW_CHANNEL']}], "Reinitialisation du serveur").then(cat => {
                          msg.guild.createChannel('staff', 'text', [{id: msg.guild.id,deny: ['VIEW_CHANNEL']}], "Reinitialisation du serveur").then(chan => {
							    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( staff ) @everyone`)
							  msg.guild.createChannel('Vocal', 'voice', [{id: msg.guild.id,deny: ['VIEW_CHANNEL']}], "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( staff ) @everyone`)
									
                                });
								 });
								
                            msg.guild.createChannel('Salons vocaux', 'category', null, "Reinitialisation du serveur").then(cat => {
                                msg.guild.createChannel('Vocal#1', 'voice', null, "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    msg.guild.setAFKChannel(chan, "Reinitialisation du serveur")
                                });
                            });
							 msg.guild.createChannel('PRISON', 'category', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], "Reinitialisation du serveur").then(cat => {
                          msg.guild.createChannel('cellule', 'text', null, "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Reset ( cellule ) @everyone`)
                                });
								 });
								 });
                            
                            
                            AllChannels.forEach(function(value){
                              value.delete();
                            });
                            
                            msg.guild.setName(ServerName);
                            msg.guild.setRegion("eu-central");
                            msg.guild.setAFKTimeout(300);
                            msg.guild.setIcon("./bot.png");
                            msg.guild.setVerificationLevel(1);
                            
                            var emojilist = msg.guild.emojis
                            emojilist.forEach(function(value){
                              msg.guild.deleteEmoji(value);
                            });
                            
                            var rolelist = msg.guild.roles
                            rolelist.forEach(function(value){
                                if (value.id != "462752507165278208" && value.id != "462752527981740033" && value.id != "462752539461550081" && value.id != "462752546386345985" && value.id != "462752552614625281" && value.id != "462752564207943700"){
                                    value.delete();
                                };
                            });
                            
                        });
                        msg.react('👍');
                    });     
            }else{
                msg.channel.send("<@" + msg.member.id + ">, Vous n'avez pas la permission de faire cette commande!").then(msg => msg.delete(5000));
                msg.delete(100);
            }
			  break;
    }
}); 
bot.login(tokens.d_token);