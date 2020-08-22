const dadjokes = require('../data/dadjokes.json');

module.exports = {
    name: 'dadjokes',
    description: 'Send a dad joke because why not',
    execute(message) {
        message.channel.send(`${dadjokes[Math.floor(Math.random() * dadjokes.length)]}`);
    },
};