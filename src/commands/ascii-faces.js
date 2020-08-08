const asciiFaces = require("ascii-faces");

module.exports = {
    name: 'ascii-faces',
    description: "Get a ton of super cute copy-and-paste Ascii Faces (◕‿◕)  ʕ´•ᴥ•`ʔ ",
    execute(message) {
        let randomSet = getRandomNumber(0, asciiFaces.faces.length - 11)
        let faces = asciiFaces.faces.slice(randomSet, randomSet + 10).join("     ")
        return message.reply("Here are some copy-and-paste :clipboard: ascii faces\n" + faces)

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
};