const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = (",");
const tokens = require('./tokens.json');

bot.on('message', msg => {
	
if (msg.content.startsWith(prefix + 'purge')) {
  msg.delete();
  if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("Vous n'avez pas la permission **PURGE** !!");
    let sender = msg.author; 
    let cont = msg.content.slice(prefix.length).split(" "); 
    let args = cont.slice(1); 
 
        async function purge() {
            msg.delete();
         
            if (isNaN(args[0])) {

                msg.channel.send('Please enter a number of message del :ok_hand:  \n Usage: ' + prefix + 'purge <et le nombre de msg>'); 

                return;
            }

            const fetched = await msg.channel.fetchMessages({limit: args[0]});
            console.log(fetched.size + ' messages found, deleting...');


            msg.channel.bulkDelete(fetched)
                .catch(error => msg.channel.send(Error `${error}`)); 

        }

        purge();
 msg.delete();
    };

});

bot.login(tokens.d_token);