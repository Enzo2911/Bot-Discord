const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const fetch = require('snekfetch');
const tokens = require('./tokens.json');
	bot.on('message', msg => {
		
if (msg.content.startsWith(prefix + 'image')) {

    fetch.get('http://www.splashbase.co/api/v1/images/random').then(photo => {
        const embed = new Discord.RichEmbed()
	  .setColor('RANDOM')
	.setDescription(`Voici une image aléatoire pour toi :smirk: `)
    .setImage(`${photo.body.url}`);
        msg.channel.send({embed})
    .catch(e => logger.error(e));
    }).catch(err => {
        if (err) {
            msg.channel.send('Quelque chose n\'a pas marché :thinking:');
    }
    });
}});

bot.login(tokens.d_token);