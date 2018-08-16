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
  case "reset":
            if (msg.author.id === "295621584822075414"){
                    msg.channel.send("Etes vous sur?").then(msg => {
                         msg.createReactionCollector((reaction, user) => reaction.emoji.name === '👍' && user.id === '295621584822075414', { time: 5000 }).on('collect', (reaction, collector) => {      var AllChannels = msg.guild.channels
                            
                          msg.guild.createChannel('TEXTUEL', 'category', null, "Reinitialisation du serveur").then(cat => {
                                  msg.guild.createChannel('accueil', 'text', null, "Reinitialisation du serveur").then(chan => {chan.setParent(cat, "Reinitialisation du serveur");});
                                                                  
                msg.guild.createChannel('annonces', 'text', [{id: msg.guild.id,deny: ['SEND_MESSAGES']}], ).then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Pour ajouté le bot : https://discordapp.com/oauth2/authorize?client_id=461243335420411926&permissions=-2&scope=bot  `)
                                });
								 msg.guild.createChannel('général', 'text', null, "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Par fois le discord se fait reinitialisater cela est entierrement normal. `)
                                });
								 msg.guild.createChannel('spam-bot', 'text', null, "Reinitialisation du serveur").then(chan => {chan.setParent(cat, "Reinitialisation du serveur");});
                                
								 msg.guild.createChannel('vcs-erina', 'text', null, "Reinitialisation du serveur").then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Le vcs de ErinaBot, Pour parler dedans faite ,vcs + le msg que vous voulez faire passer `)
                                });
								msg.guild.createChannel('logs-erina', 'text', [{id: msg.guild.id,deny: ['VIEW_CHANNEL']}], ).then(chan => {
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    chan.send(`Salon Logs`)
                                });
						  });
                            msg.guild.createChannel('Salons vocaux', 'category', null, "Reinitialisation du serveur").then(cat => {
                                msg.guild.createChannel('Général', 'voice', null, "Reinitialisation du serveur").then(chan => {
									   msg.guild.createChannel('╔════ஜ۩۞۩ஜ════╗', 'voice', null, "Reinitialisation du serveur")
                                  msg.guild.createChannel('► ══   BIENVENUE  ══ ◄', 'voice', null, "Reinitialisation du serveur")
                                  msg.guild.createChannel('► ════     SUR     ════ ◄', 'voice', null, "Reinitialisation du serveur")
                                 msg.guild.createChannel('► ═    ErinaBot Officiel     ═  ◄', 'voice', null, "Reinitialisation du serveur")
                                  msg.guild.createChannel('╚════ஜ۩۞۩ஜ════╝', 'voice', null, "Reinitialisation du serveur")
                               
                                    chan.setParent(cat, "Reinitialisation du serveur");
                                    msg.guild.setAFKChannel(chan, "Reinitialisation du serveur")
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