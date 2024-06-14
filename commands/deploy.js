module.exports = {
    name: 'deploy',
    description: 'Deploy commands to the guild',
    async execute(message, client) {
        if (message.author.bot || !message.guild) return;
        if (!client.application?.owner) await client.application?.fetch();

        if (message.content === '!deploy' && message.author.id === client.application?.owner?.id) {
            await message.guild.commands.set([
                {
                    name: 'play',
                    description: 'Plays a song from youtube',
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
                    description: 'Skip to the current song'
                },
                {
                    name: 'stop',
                    description: 'Stop the player'
                },
            ]);

            await message.reply('Deployed!');
        }
    }
};
