const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("609990352685760532")
setInterval(function() {
channel.send(`احبك يا انا مرا احبك انت افضل واحد اي لاف يو يا انا xd`);
}, 30)
})

client.login(process.env.TOKEN.TOKEN2);