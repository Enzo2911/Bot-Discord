const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');
	bot.on('message', msg => {
		
if (msg.content.startsWith(prefix + 'wiki')) {

	let args = msg.content.split(' ')
		args.shift()
		msg.reply('`Voici le résultat de votre recherche` :arrow_heading_down:\nhttps://fr.wikipedia.org/wiki/' + args.join('_'))

}});
bot.login(tokens.d_token);