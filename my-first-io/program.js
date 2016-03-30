var fs = require('fs'),
    file = process.argv[2],
    buffer = fs.readFileSync(file),
    string = buffer.toString(),
    array = string.split('\n'),
    numLines = array.length - 1;

console.log(numLines);