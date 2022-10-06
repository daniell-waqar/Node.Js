const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('switch off button!');
  setTimeout(()=>{
    console.log('switch off button!, its a reminder');    //setTimeout will run when all the execution done
 
  }, 3000);
});

console.log("Script is running")


myEmitter.emit('WaterFull');    //event called

console.log("Script is still running")