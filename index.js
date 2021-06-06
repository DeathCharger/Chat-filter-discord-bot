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
  if(config.FILTER_WORDS.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
    
    message.channel.send({embed: {
  color: Math.floor(Math.random() * 16777214) + 1,   //you can change the color to a single one....this code cause the embed color to change randomly
  title: "This message is banned on this server", // you can customise the embed
  description: "Please don't use vulgar messages.",
  
}});

}});
