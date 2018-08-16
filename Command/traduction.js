const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');

bot.on("message", async msg => {
	 if (msg.author.equals(bot.user)) return;
    if (!msg.content.startsWith(prefix)) return;
    if (msg.channel.type === "dm") return msg.channel.send("PLS execute la commande sur un channel et pas en privé!")
var args = msg.content.substring(prefix.length).split(" ")
	 switch (args[0].toLowerCase()) {
		  
case "tradhelp":
            var tradhelp_embed = new Discord.RichEmbed()
                    .addBlankField()        
                    .addField(",tradenfr", "Traduction Anglais ==> Français !") 
                    .addField(",tradfren", "Traduction Français ==> Anglais !")
                    .addField(",tradesfr", "Traduction Espagnol ==> Français !")
                    .addField(",tradfres", "Taduction Français ==> Espagnol !")
                    .addField(",tradesen", "Traduction Espagnol ==> Anglais !")
                    .addField(",tradenes", "Taduction Anglais ==> Espagnol !")            
                .setColor("#00ffcc")
                .setFooter('Traduction')
                .setAuthor("Pannel des Traduction")
                .setDescription("petit rappel sa n'affichera pas le le texte mais le lien de google traduction !")
                .setTimestamp()
            msg.delete()
            msg.channel.send(tradhelp_embed)
            console.log("Il veut traduire " + msg.author.username + " !")
        break;      
      
        case "tradenfr":
            let tradenfr = msg.content.split(" ").slice(1);
            let suffix_tradenfr = tradenfr.join('%20')
            if(!suffix_tradenfr) return msg.reply("Vous devez marquez un texte à traduire")
            var tradenfr_embed = new Discord.RichEmbed()
                .setTitle("Traduction Anglais -> Français")
                .setDescription('[Voir la Traduction](https://translate.google.fr/#en/fr/' + suffix_tradenfr + ')')
                .setColor("#36393E")
                .setFooter('Traduction')
				msg.channel.send(tradenfr_embed)
            console.log("Traduction Anglais -> Français");
        break;
      
        case "tradfren":
            let tradfren = msg.content.split(" ").slice(1);
            let suffix_tradfren = tradfren.join('%20')
            if(!suffix_tradfren) return msg.reply("Vous devez marquez un texte à traduire")
            var tradfren_embed = new Discord.RichEmbed()
                .setTitle("Traduction Français -> Anglais")
                .setDescription('[Voir la Traduction](https://translate.google.fr/#fr/en/' + suffix_tradfren + ')')
                .setColor("#36393E")
                .setFooter('Traduction')
			  msg.channel.send(tradfren_embed)
            console.log("Traduction Français -> Anglais");
        break;
      
        case "tradesfr":
            let tradesfr = msg.content.split(" ").slice(1);
            let suffix_tradesfr = tradesfr.join('%20')
            if(!suffix_tradesfr) return msg.reply("Vous devez marquez un texte à traduire")
            var tradesfr_embed = new Discord.RichEmbed()
                .setTitle("Traduction Espagnol -> Français")
                .setDescription('[Voir la Traduction](https://translate.google.fr/#es/fr/' + suffix_tradesfr + ')')
                .setColor("#36393E")
               .setFooter('Traduction')
			    msg.channel.send(tradesfr_embed)
            console.log("Traduction Espagnol -> Français");
        break;
      
        case "tradfres":
            let tradfres = msg.content.split(" ").slice(1);
            let suffix_tradfres = tradfres.join('%20')
            if(!suffix_tradfres) return msg.reply("Vous devez marquez un texte à traduire")
            var tradfres_embed = new Discord.RichEmbed()
                .setTitle("Traduction Français -> Espagnol")
                .setDescription('[Voir la Traduction](https://translate.google.fr/#fr/es/' + suffix_tradfres + ')')
                .setColor("#36393E")
               .setFooter('Traduction')
			   msg.channel.send(tradfres_embed)
            console.log("Traduction Français -> Espagnol");
        break;      
      
        case "tradenes":
            let tradenes = msg.content.split(" ").slice(1);
            let suffix_tradenes = tradenes.join('%20')
            if(!suffix_tradenes) return msg.reply("Vous devez marquez un texte à traduire")
            var tradenes_embed = new Discord.RichEmbed()
                .setTitle("Traduction Anglais -> Espagnol")
                .setDescription('[Voir la Traduction](https://translate.google.fr/#en/es/' + suffix_tradenes + ')')
                .setColor("#36393E")
               .setFooter('Traduction')
			   msg.channel.send(tradenes_embed)
            console.log("Traduction Anglais -> Espagnol");      
        break;     

	    case "tradesen":
            let tradesen = msg.content.split(" ").slice(1);
            let suffix_tradesen = tradesen.join('%20')
            if(!suffix_tradesen) return msg.reply("Vous devez marquez un texte à traduire")
            var tradesen_embed = new Discord.RichEmbed()
                .setTitle("Traduction Espagnol -> Anglais")
                .setDescription('[Voir la Traduction](https://translate.google.fr/#es/en/' + suffix_tradesen + ')')
                .setColor("#36393E")
                .setFooter('Traduction')
			   msg.channel.send(tradesen_embed)
            console.log("Traduction Espagnol -> Anglais");
	 
}}); 
bot.login(tokens.d_token);
