bot.on('guildMemberAdd', member => {

  const welcomechannel = member.guild.channels.find('name', 'accueil') // ID de notre channel
    var embed = new Discord.RichEmbed()
  
   .setTitle(" Un Nouvelle Personne A Fait Sont Apparition ")
    .setDescription(`:muscle:  <@${member.user.id}> nous a rejoint :smirk: !! `)
    .setColor("RANDOM")
 return welcomechannel.send({embed})
 
 
 });

bot.on('guildMemberRemove', member => {

  const welcomechannel = member.guild.channels.find('name', 'accueil') // ID de notre channel
    var embed = new Discord.RichEmbed()
    .setTitle(" Un Personne Nous a Quitter ")
	.setColor('RANDOM')
    .setDescription(`:inbox_tray: <@${member.user.id}> nous a quitté :x:!! `)
    return welcomechannel.send({embed})
  
 });