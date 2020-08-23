const fs = require('fs')
// require the discord.js module
const Discord = require('discord.js');
// require config
const {
    prefix,
    token
} = require('../config.json');
const ytdl = require('ytdl-core');
const Client = require('./client/client');
// create a new Discord client
const client = new Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.once('reconnecting', () => {
    console.log('Reconnecting!');
});

client.once('disconnect', () => {
    console.log('Disconnect!');
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    try {
        if (commandName == "8ball") {
            command.execute(message, {
                args
            });
        } else {
            command.execute(message);
        }
    } catch (error) {
        if (command === undefined)
            message.reply('Command unknown');
        console.error(error);
        message.reply('There was an error trying to execute that command !');
    }
});

// login to Discord with token
client.login(token);