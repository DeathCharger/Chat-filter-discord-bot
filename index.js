const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

var http = require('http');  http.createServer(function (req, res) {   
  res.write("DeathCharger pro"); //can change lol   
  res.end(); 
}).listen(8080);
//launches a http server useful if using replit and then use uptime robot to ping the repl

client.login(config.BOT_TOKEN).catch(console.error); //must fill the token in config.json

client.on('ready', () => {
  console.log('Ready to look for blacklisted messages');
  client.user.setActivity("to DeathCharger", {type: 2}); //YOU CAN CHANGE IT IF YOU WANT
});


client.on('message', message => {
  if(config.BANNED_WORDS.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
    
    message.channel.send({embed: {
  color: Math.floor(Math.random() * 16777214) + 1,   //you can change the color to a single one....this code cause the embed color to change randomly
  title: "This message is banned on this server", // you can customise the embed
  description: "Please don't use vulgar messages.",
  footer: {
		text: 'You are muted for 10 seconds',
	},
}});
var role= message.guild.roles.cache.find(role => role.name === "Muted"); //can change the role name
message.member.roles.add(role);
setTimeout(() => {
  message.member.roles.remove(role);
}, 10000); //can change the value(1000 millisecond = 1 second), Default = 10 sec
}});
