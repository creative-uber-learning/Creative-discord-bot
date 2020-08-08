const cats = require("cat-ascii-faces");

module.exports = {
    name: 'cat-ascii',
    description: "Get a ton of super cute cat ascii faces (*^ω^*) (^人^)",
    execute(message) {
        let randomSet = getRandomNumber(0, cats.cats.length - 11)
        let cat = cats.cats.slice(randomSet, randomSet + 10).join("     ")
        return message.reply("Here are some copy-and-paste :clipboard: ascii cats\n" + cat)

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
};