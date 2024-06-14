module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        if (message.content === '!deploy') {
            const command = client.commands.get('deploy');
            if (command) {
                await command.execute(message, client);
            }
        }
    }
};
