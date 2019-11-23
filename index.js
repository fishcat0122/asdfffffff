const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Testing123")

let activityTypes = ['PLAYING','STREAMING','LISTENING','WATCHING']
let randomType = activityTypes[Math.floor((Math.random()*activityTypes.length))]

setInterval(async ()=>{
    await client.user.setActivity('E', { type: randomType })
},10000)

client.login('NjA3MzYwOTQyODQxMzk3MjQ4.XdioKw.aJmZNSnZ78MuYt4PKUIvfB1lYPI');
