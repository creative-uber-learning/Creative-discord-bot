const emoji = require("emojilib")

module.exports = {
    name: 'emojify',
    description: "Convert your message into an emojipasta. Adds emojis related to words found within the message",
    execute(message, {
        args
    }) {
        const msg_array = args;
        let emojified_msg = "";
        let char_matched_emojis = [];

        for (let i = 0; i < msg_array.length; i += 1) {
            char_matched_emojis = [];
            let word = msg_array[i];
            char_matched_emojis = getEmoji(word, emoji);

            if (char_matched_emojis.length > 0) {
                // Get random matched emojis
                let randomNumber = getRandomNumber(0, char_matched_emojis.length - 1);
                let randomEmoji = char_matched_emojis[randomNumber]
                emojified_msg += ` ${word} ${randomEmoji}`
            } else {
                emojified_msg += ` ${word}`
            }
        }
        return message.send(emojified_msg);

        function getEmoji(search_term, emoji) {
            const keys = Object.keys(emoji);
            let matched_emojis = [];
            let char_matched_emojis = [];
            for (let k = 0; k < keys.length; k += 1) {
                const key = Object.values(emoji[keys[k]]);
                const keywords = key[k]['keywords'];
                console.log(key[k]);
                if (keys[k] === search_term) {
                    matched_emojis.push(keys[k])
                    char_matched_emojis.push(emoji[keys[k]]["char"])
                } else {
                    for (let j = 0; j < keywords.length; j += 1) {
                        if (keywords[j] === search_term) {
                            matched_emojis.push(keys[k])
                            char_matched_emojis.push(emoji[keys[k]]["char"])

                        }
                    }
                }
            }
            return char_matched_emojis;
        }

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
};