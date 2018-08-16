const Discord = require("discord.js")
const fs = require("fs");
const client = new Discord.Client()
const tokens = require('./tokens.json');
const prefix = ","
const level = JSON.parse(fs.readFileSync("./level.json", "utf8"))

var donner = new Array()
donner.push([1, 1, "Faible", "adéfinir"])
donner.push([2, 500, "Petit pute", "adéfinir"])
donner.push([3, 1000, "Grande pute", "adéfinir"])
donner.push([4, 1500, "Ex-pute", "adéfinir"])
donner.push([5, 2000, "Petit con", "adéfinir"])
donner.push([6, 2500, "Grand Con", "426336001271660544"])
donner.push([7, 3500, "Ex-con", "adéfinir"])
donner.push([8, 4500, "Moyen", "adéfinir"])
donner.push([9, 5500, "Elite", "adéfinir"])
donner.push([10, 6500, "Actif", "adéfinir"])
donner.push([11, 7500, "Super-Actif", "adéfinir"])
donner.push([12, 9000, "Gigant", "adéfinir"])
donner.push([13, 10500, "Dieux des con", "adéfinir"])
donner.push([14, 12000, "Dieux", "adéfinir"])
donner.push([15, 14000, "Phantasma", "adéfinir"])
donner.push([16, 20000, "Old Deus", "adéfinir"])



client.on("message", (message) => {

    if (message.author.bot) { return }
    

    if (!message.content.startsWith(prefix)) {
 
        if (!level[message.author.id]) {
            level[message.author.id] = {
                pseudo : message.author.username,
                points : 0,
                level : 0
            }
        }

        let userData = level[message.author.id]

    
        let points = Math.floor(Math.random() * (5 - 1) + 1)
        userData.points += points

        for (let n = 0; n < donner.length; n++) {
            if (userData.level < donner[n][0] && userData.points >= donner[n][1]) {
                userData.level = donner[n][0]
                userData.points = 0
                
      
                for (let i = 0; i < donner.length; i++) {
                    message.member.removeRole(donner[i][3])
                }
                message.member.addRole(donner[n][3])
                    .catch(console.error)

          
                message.reply("Bravo, vous êtes montez de niveau ! \nVous êtes maintenant niveau " + userData.level + " !" +
                    "\n" + "Vous faites maintenant parti de " + donner[n][2])
                
            }
        }

      
        fs.writeFile("./level.json", JSON.stringify(level, 4, 4))
    } else {
        if (message.content.startsWith(prefix + "rank")) {
            if (!level[message.author.id]) {
                let userData = level[message.author.id]
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .setColor(0x0000ff)
                    .addField("Niveau : ", " 0 ", true)
                    .addField("Expérience : ", " 0", true)

                message.channel.send({embed})
            } else {
                let userData = level[message.author.id]
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .setColor(0x0000ff)
                    .addField("Niveau : ", userData.level, true)
                    .addField("Experience : ", userData.points + " / " + donner[userData.level][1], true)

                message.channel.send({embed})
            }
        }

        if (message.content.startsWith(prefix + "infolvl")) {
            const embed = new Discord.RichEmbed()
                .setColor(0x00ff00)
                .setTitle("Les different niveau !")
            for (let a = 0; a < donner.length; a++) {
                embed.addField("Niveau " + donner[a][0], "Sur " + donner[a][1] + ", le rank de " + donner[a][2])
            }

            message.channel.send({embed})
        }

        if (message.content.startsWith(prefix + "help")) {
            const embed = new Discord.RichEmbed()
                .setColor(0xff0000)
                .addField("Command : ", "-rank : Pour connaitre ton niveau et son experience" + "\n" + 
                "-infolvl : Pour avoir des info sur les niveau a passer", false)
                .addField("Info : ", "Tu gagne environs 1 a 5 xp par message", false)

            message.channel.send({embed})
        }
    }
})

client.login(tokens.d_token);