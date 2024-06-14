module.exports = {
    name: 'audioWarrior',
    description: 'Deploy commands to the guild',
    async execute(message, client) {
        if (message.author.bot || !message.guild) return;
        if (!client.application?.owner) await client.application?.fetch();

        if (message.content === '!audioWarrior' && message.author.id === client.application?.owner?.id) {
            try {
                await message.guild.commands.set([
                    {
                        name: 'play',
                        description: 'Plays a song from YouTube',
                        options: [
                            {
                                name: 'query',
                                type: 'STRING',
                                description: 'The song you want to play',
                                required: true
                            }
                        ]
                    },
                    {
                        name: 'skip',
                        description: 'Skip the current song'
                    },
                    {
                        name: 'queue',
                        description: 'View the queue'
                    },
                    {
                        name: 'stop',
                        description: 'Stop the player'
                    },
                ]);

                await message.reply('Deployed!');
            } catch (error) {
                console.error('Failed to deploy commands:', error);
                await message.reply('Failed to deploy commands. Check the console for errors.');
            }
        }
    }
};
