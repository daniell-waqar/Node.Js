
const path = require('path');


console.log(path.basename(' /temp/test.js'));   
// returns test.js 

console.log(path.basename(' /temp/test.js', '.js'));   
// returns test – without the extension

const x = path.dirname('/foo/bar/baz/asdf/quux');
console.log(x);

