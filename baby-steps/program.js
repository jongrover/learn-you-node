// console.log(process.argv);
// [ 'node', '/path/to/your/program.js', '1', '2', '3' ]

var sum = 0;

for (i=0; i < process.argv.length; i++) {
  if (i > 1) {
    sum += Number(process.argv[i]);
  }
}

console.log(sum);