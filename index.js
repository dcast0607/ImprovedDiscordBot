const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { Client, GatewayIntentBits } = require('discord.js');
const { Player, QueryType } = require('discord-player');

dotenv.config();

const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const botToken = process.env.DISCORD_BOT_TOKEN;
if (!botToken) {
    console.error('Bot token not found in environment variables.');
    process.exit(1);
}

console.log('Config:', botToken);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.on("ready", () => {
    console.log("Bot is online!");
    client.user.setActivity({
        name: "🎶 | Music Time",
        type: "LISTENING"
    });
});
client.on("error", console.error);
client.on("warn", console.warn);

client.login(botToken);