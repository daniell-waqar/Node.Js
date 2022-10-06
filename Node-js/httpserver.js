const http  = require('http');

const port = process.env.port || 3000;

const server = http.createServer((req,res)=>{          //when user gave some request to server 
    console.log(req.url)
    //in against server will send response  for that we use statusCode
    res.statusCode = 200;        //200 for ok
    res.setHeader('Content-Type','text/html')
    res.end('<h1> This is Waqar </h1> <p> Hey this is the way to rock the world! </p>')

 

});

server.listen(port,() =>{
    console.log(`Server is listening on port ${port}`);
});
