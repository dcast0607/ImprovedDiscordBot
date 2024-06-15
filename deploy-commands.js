const dotenv = require('dotenv');
const { REST, Routes } = require('discord.js');

dotenv.config();

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!'
  },
  {
    name: 'play',
    description: 'Play a song from YouTube'
  },
  {
    name: 'skip',
    description: 'Skip the current song'
  },
  {
    name: 'stop',
    description: 'Stop the player'
  }
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

async function refreshCommands() {
  try {
    console.log('Started refreshing application (/) commands.');

    // Registering commands globally - Takes up to an hour for changes to take place
    const responseGlobal = await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID),
      { body: commands }
    );

    // Registering commands for a specific guild - Changes take place instantly
    // Remove or comment when deploying to avoid redundancy
    const responseGuild = await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );

    console.log('Successfully reloaded application (/) commands.');
    console.log('Global commands added: ', responseGlobal);
    console.log('Guild-specific commands added: ', responseGuild);
  } catch (error) {
    console.error(error);
  }
}

refreshCommands();
