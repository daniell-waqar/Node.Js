const importfile = require('./moduleSecond')    // "common js modules"

importfile();

import { hello } from "./moduleSecond.mjs";    //ES6 module
hello()

import { hello2 as hello } from "./moduleSecond.mjs";   
hello()

import  hello2 from "./moduleSecond.mjs";   //we miss curly braces we have to write default in moduleSecond.js  
hello2()

import * as a2 from "./moduleSecond.mjs"
console.log(a2.hello())
