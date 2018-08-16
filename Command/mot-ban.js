	const Discord = require("discord.js");
const chalk = require("chalk");
const bot = new Discord.Client()
const tokens = require('./tokens.json');
bot.on("message",message => {
 let args = message.content.split(" ");
   if(message.content.startsWith(',csay')) {
       message.channel.send(':five:').then(m => {
         m.delete()
       })
    message.channel.send(':five:').then(m => {
         m.delete()
       })
    message.channel.send(':four:').then(m => {
         m.delete()
       })
    message.channel.send(':three:').then(m => {
         m.delete()
       })
    message.channel.send(':two:').then(m => {
         m.delete()
       })
    message.channel.send(':one:').then(m => {
         m.delete()
       })
    message.channel.send(args.join(' '))
    }

});

bot.login(tokens.d_token);