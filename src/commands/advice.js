const request = require('superagent');

module.exports = {
    name: 'advice',
    description: 'Kinda stupid life hacks',
    execute(message) {
        request
            .get('http://api.adviceslip.com/advice')
            .end((err, res) => {
                if (!err && res.status === 200) {
                    try {
                        JSON.parse(res.text)
                    } catch (e) {
                        return message.channel.send('API error occurred.');
                    }
                    const advice = JSON.parse(res.text)
                    message.channel.send(advice.slip.advice)
                } else {
                    console.error(`REST call failed: ${err}, status code: ${res.status}`)
                    message.channel.send("API failed")
                }
            });
    },
};