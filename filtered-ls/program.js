var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    ext = process.argv[3];

fs.readdir(dir, function(err, list){
  //console.log(list);
  // [ 'CHANGELOG.md','LICENCE.md','README.md','api.html','dat','data.dat','data.json','learnyounode.dat','learnyounode.sql','learnyounode.txt','md','w00t.dat','w00t.txt','words.dat','wrrrrongdat' ]

  for (i=0; i < list.length; i++) {
    // path.extname('index.html')
    // returns '.html'
    if (path.extname(list[i]) == ('.'+ext)) {
      console.log(list[i]);
    }
  }
});