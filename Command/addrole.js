const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
 bot.on('message', message=> {
      
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
   if(message.content.startsWith(prefix + "addrole")) {
 if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No can do pal!"); 
    
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("User does not exist!");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find('name', role);
    if(!gRole) return message.reply("Couldn't find role!");

    if(rMember.roles.has(gRole.id)) return message.reply("They already have that role!");
      rMember.addRoles(gRole.id);
   new Discord.RichEmbed()
      .setColor("RANDOM")
    message.channel.send(`${rMember}, you recived the role Membre `)
    message.channel.send(`<@${message.author.id}>, you gave them that role! `) 
  
  
 }
        if (message.content === ',help addrole'){
  message.delete();
  const sicon = bot.user.displayAvatarURL
    let serverembed = new Discord.RichEmbed()
    .setTitle(" ----- PANEL AIDE ADDROLE -----")
    .setAuthor(bot.user.username, bot.user.avatarURL)	
    .addField("`  for use the command  addrole : `"," you must need have the permission BAN_MEMBERS")
    .addField("`How you can use : `"," -addrole + mentione + the name of the role to give")
    .setColor("RANDOM")
    .setThumbnail(sicon)
    .setImage('')
    .setFooter("Command made by DreamDeveloper#0001 & Enzo ");
     message.channel.send(serverembed).catch(console.error);
    }
           }); 

bot.login(tokens.d_token);