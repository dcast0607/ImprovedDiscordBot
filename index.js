const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { Client, GatewayIntentBits } = require('discord.js');
const { Player, QueryType } = require('discord-player'); 

dotenv.config();

const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const botToken = process.env.DISCORD_BOT_TOKEN;
config.botToken = botToken;

console.log('Config:', config.botToken);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates
    ]
});
client.login(config.botToken)

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on("error", console.error);
client.on("warn", console.warn);
