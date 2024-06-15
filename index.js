const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
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

client.on('ready', () => {
    console.log('Bot is online!');
    console.log(`Logged in as ${client.user.tag}`);
    console.log('Setting activity status...');
    client.user.setActivity('AudioWarrior Music!', { type: ActivityType.Listening });
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
  });



client.login(botToken);