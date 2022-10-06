const http  = require('http');

const fs = require('fs')

const port = process.env.port || 3000;

const server = http.createServer((req,res)=>{          
    console.log(req.url)
     
    res.setHeader('Content-Type','text/html')
   
    
    if(req.url == '/'){
             
        res.statusCode = 200; 
        const data = fs.readFileSync('index.html');         //readFile() and create website :without express
        res.end(data.toString()); 
     
    }
    else if(req.url == '/about'){
          
        res.statusCode = 200;        
        res.end('<h1> This is about Waqar </h1> <p> Hey this is about me! </p>');
    }

    else if(req.url == '/ABC'){
          
        res.statusCode = 200;        
        res.end('<h1> This is Waqar </h1> <p> Hey this is the way to rock the world! </p>')
    }

    else{
        //res.waqar();  //I know waqar is not a function but intentionally
                    //i want to crash this server,that's why we use nodemon
        res.end('<h1> Not found!</h1> <p> Hey this page is not found! </p>') 
        res.statusCode = 404;       
    }
 

 

});

server.listen(port,() =>{
    console.log(`Server is listening on port ${port}`);
});
