var target = process.argv[2];

if (!target) { throw new Error('Target is undefined. [driver, body, tire, glider]') }

var tmpl = `{
    "id": "%s",
    "name": "%s",
    "speed": {
        "ground": "%s",
        "water": "%s",
        "air": "%s",
        "antiGravity": "%s"
    },
    "acceleration": "%s",
    "weight": "%s",
    "handling": {
        "ground": "%s",
        "water": "%s",
        "air": "%s",
        "antiGravity": "%s"
    },
    "traction": "%s",
    "miniTurbo": "%s"
}`;
var outputStr = [];

var fs = require('fs'),
    rl = require('readline');
var util = require('util');
var inputStream   = fs.createReadStream(`${__dirname}/tsv/${target}.tsv`),
    inputReadLine = rl.createInterface({ 'input': inputStream, 'output': {} });

inputReadLine
.on('line', (line) => {
    var args = line.split('\t');
    outputStr.push(util.format(tmpl, ...args));
})
.on('close', () => {
    fs.writeFile(`${__dirname}/json/${target}.json`, '[' + outputStr + ']', () => {});
});
