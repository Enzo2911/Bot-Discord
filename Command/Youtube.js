const Discord = require('discord.js');
const yt = require('ytdl-core');
const tokens = require('./tokens.json');
const client = new Discord.Client();
 
client.login(tokens.d_token);
 

client.on('message', message => {
    if (!message.content.startsWith(tokens.prefix)) return;
    if (commands.hasOwnProperty(message.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0])) commands[message.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0]](message);
});
 if (message.content.startsWith(prefix + "music")) { 
  var embed = new Discord.RichEmbed()
     .setTitle("Commande Music Help : ")
	  .addField(":musical_note: Pour Faire Rejoindre Le Bot En Vocal :musical_note:  Avec Vous :  ", ` \`\`\`js\nIl vous suffit de Faire : ${tokens.prefix}join\n\`\`\``)
	 .addField(":mute: Pour Faire Quitter Le Bot Du Vocal :mute::  ",  ` \`\`\`js\nIl vous suffit de Faire : ${tokens.prefix}quit\n\`\`\``)
	 .addField(":loud_sound:  Pour ecouté les music  :loud_sound: :  ",  ` \`\`\`js\nIl vous suffit de Faire : ${tokens.prefix}play\n\`\`\``)
	  .addField(":musical_note:  Pour ajouter une music en dans la queue :musical_note::  ",  ` \`\`\`js\nIl vous suffit de Faire : ${tokens.prefix}add + lien de la music.\n\`\`\``)
	  .addField(":link: Pour voir les differente music mis dans le queue :link::  ",  ` \`\`\`js\nIl vous suffit de Faire : ${tokens.prefix}queue\n\`\`\``)
	   .addField(":play_pause: Pour mettre en pause la music  :play_pause::  ",  ` \`\`\`js\nIl vous suffit de Faire : ${tokens.prefix}pause\n\`\`\``)
	   .addField(":play_pause: Pour mettre en lecture la music :play_pause::  ",  ` \`\`\`js\nIl vous suffit de Faire : ${tokens.prefix}resume\n\`\`\``)
	 .addField(":track_next:  Pour skip la music  :track_next::  ",  ` \`\`\`js\nIl vous suffit de Faire : ${tokens.prefix}skip\n\`\`\``)
	 .addField(":timer:  Pour depuis combien de temp tu ecoute la music :timer::  ",  ` \`\`\`js\nIl vous suffit de Faire : ${tokens.prefix}time\n\`\`\``)
	 .addField(":loud_sound:   Pour augmenté le son de la music :loud_sound::  ",  ` \`\`\`js\nIl vous suffit de Faire : ${tokens.prefix}volume +\n\`\`\``)
	 .addField(":sound:  Pour diminuer le son de la music :sound::  ",  ` \`\`\`js\nIl vous suffit de Faire : ${tokens.prefix}volume -\n\`\`\``)
	 

	.setColor("#ccff33")
   message.channel.send(embed);
   
}
if (message.content.startsWith(prefix + "quit")) {
  const voiceChannel = message.member.voiceChannel;
  voiceChannel.leave()
  message.channel.sendMessage(":white_check_mark: J'ai quitter le vocal " + voiceChannel + " avec success :white_check_mark: ");
  
}
if (message.content.startsWith(prefix + "join")) { 
  const voiceChannel = message.member.voiceChannel;
  if (!voiceChannel || voiceChannel.type !== 'voice') {
	  message.channel.sendMessage(":warning: Vous n'ete pas connecter a un vocal :x:")
  }
  else {
	  message.channel.sendMessage(":white_check_mark:  J'ai rejoint le vocal " + voiceChannel + " avec succes :white_check_mark: " );
	  voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
  }
   if (message.guild.voiceConnection === "") {
	   message.channel.sendMessage(" :x: Le vocal est complet veuiller soit agrandire le vocal soit virée des gens :x:")
}}

let queue = {};
 
const commands = {
    'play': (message) => {
        if(queue[message.guild.id] === undefined) return message.channel.sendMessage(`you need some songs in the queue homeboy. add them with ${tokens.prefix}add`);
        if(!message.guild.voiceConnection) return commands.join(message).then(() => commands.play(message));
        if(queue[message.guild.id].playing) return message.channel.sendMessage('Deja En Cours de Lecture');
        let dispatcher;
        queue[message.guild.id].playing = true;
 
 
        console.log(queue);
        (function play(song) {
            console.log(song);
            if(song === undefined) return message.channel.sendMessage('Rien a faire ').then(() => {
                queue[message.guild.id].playing=false;
                message.member.voiceChannel.leave();
            });
            message.channel.sendMessage(`playing: **${song.title}** Demandé par: **${song.requester}**`);
            dispatcher = message.guild.voiceConnection.playStream(yt(song.url, { audioonly: true}), {passes : tokens.json});
            let collector = message.channel.createCollector(m => m);
            collector.on('message', m =>{
                if(m.content.startsWith(tokens.prefix + 'pause')) {
                    message.channel.sendMessage('La music a été mis en pause').then(() => {dispatcher.passes();});
                }else if (m.content.startsWith(tokens.prefix + 'resume')){
                    message.channel.sendMessage('La music a été remis en lecture').then(() => {dispatcher.resume();});
                }else if (m.content.startsWith(tokens.prefix + 'skip')){
                    message.channel.sendMessage('la music a été skip :arrow_right: ').then(() => {dispatcher.end();});
                }else if (m.content.startsWith('volume +')){
                    if (Math.round(dispatcher.volume*50) >= 100) return message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                    dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.conten.split('-').length-1)))/50, 0));
                    message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                }else if (m.content.startsWith('volume -')){
                    if (Math.round(dispatcher.volume*50) <= 0) return message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                    dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50, 0));
                    message.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
                }else if (m.content.startsWith(tokens.prefix + 'time')){
                    message.channel.sendMessage(`Le temp de lecture de la music est de : ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0' +Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
                }
            });
            dispatcher.on('stop', () => {
                collector.stop();
                queue[message.guild.id].songs.shift();
            play(queue[message.guild.id].songs[0]);
            });
            dispatcher.on('error', (err) => {
                return message.channel.sendMessage('error: ' + err).then(() => {
                    collector.stop();
                    queue[message.guild.id].songs.shift();
                    play(queue[message.guild.id].songs[0]);
                });
            });
        })(queue[message.guild.id].songs[0]);
 
        },
        
        'add' : (message) => {
            let url = message.content.split(' ')[1];
            if (url == '' || url === undefined) return message.channel.sendMessage(`homie, you need a url or a youtube video id after ${tokens.prefix}add`);
            yt.getInfo(url, (err, info) =>{
                if(err) return message.channel.sendMessage('le lien donner est pas valide' +err);
                if(!queue.hasOwnProperty(message.guild.id)) queue[message.guild.id] = {}, queue[message.guild.id].playing = false, queue[message.guild.id].songs = [];
                queue[message.guild.id].songs.push({url: url, title: info.title, requester: message.author.username});
                message.channel.sendMessage(`ajouté **${info.title}** a la list`);
 
    });
 
 },
        'queue' : (message) => {
             if (queue[message.guild.id] === undefined) return message.channel.sendMessage(`Add some songs to the queue first with ${tokens.prefix}add`);
            let tosend = [];
            queue[message.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - demandé par : ${song.requester}`);});
            message.channel.sendMessage(`__**${message.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
    },
	"radio": {
		process: function (msg, suffix, embed) {
			if (!msg.member.voiceChannel) return msg.channel.send('<:tick:445752370324832256> You are not on a voice channel.');
			if (!msg.member.voiceChannel.joinable) return msg.channel.send("<:tick:445752370324832256> I\'m unable to play music in this channel.");
			if (!suffix) {
				embed.setDescription("• Insert a correct radio to play.\n\n`[-]` **Available radios:** `Rap, jazz & dubstep`");
				embed.setColor("#b92727");
				return msg.channel.send({ embed });
			}
			let radio; // Empty Variable
			if (suffix.toLowerCase() == "rap") {
				radio = "A-RAP-FM-WEB";
			} else if (suffix.toLowerCase() == "jazz") {
				radio = "WineFarmAndTouristradio";
			} else if (suffix.toLowerCase() == "dubstep") {
				radio = "ELECTROPOP-MUSIC";
			} else {
				embed.setDescription("• Insert a correct radio to play.\n\n`[-]` **Available radios:** `Rap, jazz & dubstep`");
				embed.setColor("#b92727");
				return msg.channel.send({ embed });
			}
			msg.member.voiceChannel.join().then(connection => {
				require('http').get("http://streaming.radionomy.com/" + radio, (res) => {
					connection.playStream(res);
					embed.setColor("#b92727");
					embed.setDescription("<:tick2:445752599631888384> Playing correctly!");
					msg.channel.send({ embed });
				});
			}).catch(err => "<:tick:445752370324832256> **Error:** ```\n" + err + "```");
			}
	},
 };