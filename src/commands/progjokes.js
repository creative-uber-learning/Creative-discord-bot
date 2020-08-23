const progjokes = require('../data/progjokes.json');

module.exports = {
    name: 'progjokes',
    description: 'Send a prog joke because why not',
    execute(message) {
        message.channel.send(`${progjokes[Math.floor(Math.random() * progjokes.length)]}`);
    },
};