const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');

bot.on("message", (message) => {
	


	/*
		Object message :
		
		- mentions.users = utilisateurs mentionn�s
		- author.username = auteur du message
		- content = contenu du message
		- createdTimestamp = timestamp du message
		- member.guild.name = nom du serveur
		- channel.name = nom du topic
		- channel.topic = description du topic
		- channel.guild.roles = r�les sur le serveurp%$
	*/
	
	if(message.content.substring(0, 7) == "-report")
	{
		var commande = message.content.split(" ");
		
		if(typeof commande[1] === 'undefined')
		{
			if(message.author.bot === false)
			{
			
				message.reply("**Aide pour la commande report :** \n\n Pour rapporter un ou plusieurs utilisateurs ayant un comportement inappropri�, mettre le nom ou les noms des utilisateurs apr�s la commande report. \n\n Vous pouvez �galement rajouter une raison particuli�re avec l'attribut `-r:\"Votre raison\"`. \n\n Ne vous amusez pas � abuser cette commande � tout va, merci :wink: ! \n\n **Exemple 1 :** `-report @user` \n \n **Exemple 2 :** `-report @user -r:\"Une raison\"`");
			}
		}
		else
		{
			// V�rifier les noms + raison de signalement
			var verifNom = true;
			var raisonSignalement = null;
			var inOptionRaison = false;
			
			for(var i = 1; i < commande.length; i++)
			{
				// Les noms des personnes cit�es commencent par "<", le caract�re suivant �tant @
				if(commande[i].charAt(1) !== "@")
				{
					// On ne prend pas en compte l'option -r (raison)
					if(commande[i].substring(0, 4) == "-r:\"")
					{
						raisonSignalement = commande[i].substring(3);
						inOptionRaison = true;
					}
					else
					{
						if(inOptionRaison == false)
						{	
							verifNom = false;
						}
						else
						{
							raisonSignalement = raisonSignalement + " " + commande[i];
						}
					}
				}
			}
			
			if(verifNom === true)
			{
				// V�rification des abus
				var aAppele = false;
				for(var i = 0; i < dernierAppel.length; i++)
				{
					if(dernierAppel[i][0] == message.author.id)
					{
						// Un signalement toutes les 3 minutes autoris�
						if((message.createdTimestamp - dernierAppel[i][1]) < 180000)
						{
							aAppele = true;
						}
						else
						{
							aAppele = false;
							dernierAppel.splice(i, 1);
						}
					}
				}
				
				if(aAppele == false)
				{
					dernierAppel.push([message.author.id, message.createdTimestamp]);
					
					var moderateurs = new Array();
					
					var sontAvertis = true;
					
					message.channel.guild.roles.forEach(function(role)
					{
						// Chercher les mod�rateurs parmi tous les r�les
						
						if (role.hasPermission('BAN_MEMBERS'))
						{
							role.members.forEach(function(member)
							{
								var estDejaPrevenu = false;
								for(var j = 0; j < moderateurs.length; j++)
								{
									if(member == moderateurs[j])
									{
										// Est d�j� pr�venu
										estDejaPrevenu = true;
									}
								}
									
								if(estDejaPrevenu == false)
								{
									moderateurs.push(member);
								
									// Fonction conversion timestamp -> Date
									function timeConverter(timestamp)
									{
										var a = new Date(timestamp);
										var tabMois = ['Janv.','F�vr.','Mars','Avri.','Mai.','Juin','Juil.','Ao�t','Sept.','Octo.','Nove.','D�ce.'];
										var annee = a.getFullYear();
										var mois = tabMois[a.getMonth()];
										var date = a.getDate();
										var heure = a.getHours();
										var min = a.getMinutes();
										var sec = a.getSeconds();
										var time = "le " + date + ' ' + mois + ' ' + annee + ' � ' + heure + 'h' + min + ':' + sec ;
										return time;
									}
									
									// Reporter les utilisateurs
									var MP = "Un Warn Fait le " + timeConverter(message.createdTimestamp) + " par **" + message.author.username + "** a �t� effectu� � contre ";
									
									message.mentions.users.forEach(function(user)
									{
										MP = MP + "@" + user.username + " ";
									});
									
									MP =  MP + "sur *" + member.guild.name + "/" + message.channel.name + "*";
									
									// Prise en charge de la raison du signalement
									if(raisonSignalement != null)
									{
										MP = MP + " pour la raison suivante :thinking: : *" + raisonSignalement + "*";
									}
									
									try
									{
										member.user.sendMessage(MP);
									}
									catch(e)
									{
										sontAvertis = false;
									}
								}
							});
						}
					});
					
					if(sontAvertis == true)
					{
						message.reply(" Rapport effectu� :thinking: !");
					}
				}
			}
		}
	}

});

bot.login(tokens.d_token);