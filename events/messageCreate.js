module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.content === '!audioWarrior') {
            const command = client.commands.get('audioWarrior');
            if (command) {
                await command.execute(message, client);
            }
        }
    }
};
