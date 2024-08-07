"use strict";
//BASIC OBJECTS IN TYPESCRIPT:
// isky bina javascript acess hi nahe karti.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let person = {
    name: "asma",
    rollNumber: 1235,
    subject: "computer"
};
// console.log(person) // curley braket bhi sath me pora print hojaye ga 
//this is wrong way
console.log(person.name); // . dot always object k sath lagta he 
let car = {
    name: "honda",
    type: "corolla",
    model: "15wQ5pk6o",
    coloe: "red",
    features: ["power window", "power staring", "secure roof window"]
};
console.log(car.name); //do ko bhi sath console kra sakty concrete kar sakty he 
//MODULES: import export karwana. one file isolated wich each other.
// ak file me error hoga to baki file run hogi
//inquirer: inquirer ka code publish kya npm pr taky kam asan hojaye. question poxhny kalye use hota he.
//typescript is also npm publish app
//.prompt: promptits function
// await: waite for your input
const inquirer_1 = __importDefault(require("inquirer"));
let answer = await inquirer_1.default.promt([
    {
        name: "question1",
        message: "what is your name?",
        type: "input"
    },
    {
        name: "question2",
        message: "what is your Gender?",
        type: "list",
        choices: ["male", "female"]
    },
]);
console.log(answer); //{question1: asma} // ye pora object print karey ga
console.log(answer.question1); // print asma hoga q k answer question1 mw save hoga
console.log(`Hello ${answer.question1} your ${answer.question2}`);
