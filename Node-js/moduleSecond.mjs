function hello(){
    console.log("Hello, Waqar");
}

module.exports = hello;       
// "common js modules"


export function hello(){        //ES6 module   
    console.log("Hello, Waqar");
    return 15
}

export default function hello2(){      
    console.log("Hello, Ahmed");
}