var fs = require('fs'),
    file = process.argv[2];

fs.readFile(file, 'utf-8', function(err, data){
  var array = data.split('\n'),
      numLines = array.length - 1;
  console.log(numLines);
});