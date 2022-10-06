const fs = require('fs');




// Here we are reading a file.txt


fs.readFile('file.txt','utf8',(err,data)=>{


    console.log(err,data);
})

console.log("Finished reading file");

//have to use "Sync" with readFile and by doing this nodejs will intentionally block!

const a = fs.readFileSync('file.txt')

console.log(a);

 console.log("Finished reading file");


const b = fs.readFileSync('file.txt')

console.log(b.toString());

//toString used for content of file
console.log("Finished reading file");



fs.writeFileSync('file2.txt',"Writing some data",()=>
{
    console.log("Written to the file");


});
console.log("Finished writing!");

