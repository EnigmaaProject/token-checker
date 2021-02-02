const Bot = require('./check.js');
const fs = require('fs');

const config = require('./config.json');

fs.writeFileSync('result/invalid.txt', '');
fs.writeFileSync('result/verified.txt', '');
fs.writeFileSync('result/unverified.txt', '');

const tokens = fs.readFileSync('tokens.txt', 'utf-8').replace(/\r/gi, '').split("\n");

var i = 0;
setInterval(() => {
    if (i >= tokens.length) {
        console.log("Vérification des tokens terminée ! N'oubliez pas de rejoindre notre discord : https://discord.gg/tnF6xG8Jam");
        console.log("ENIGMA PROJECT")
        process.exit(1);
    }
    Bot.check(tokens[i]);
    i++;
}, config.timeout);