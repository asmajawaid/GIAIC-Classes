"use strict";
//SWITCH statement homework page 154 jab ziada cases if else k hu to switch use karey gy
//if else use nahe kary gy
//FUNCTION
// function me veriable ko store karwaty he taky changes karny me isani rahy
// 1000 of code hota he function k through kam karwana asan hota he
// jab tk call anhe kareey gy function kam nahe karey gy
// return isliye use karey gy taky wo answer return karey.return last he isky bad koi bhi code likha hu nahe chaly ga.
// function k ander condition laga sakty he variable bana sakty he 
function greet() {
    return "hellow world"; // curley bracket me work definre kardiya
}
let message = greet(); // isko print karwany kalye pehle variable me store karwana zaroori he
console.log(message); //hellow world 
function sums() {
    2 + 2;
}
let result = sums();
console.log(result); //undefine return nshe karwaya
function sum() {
    return 2 + 2;
}
let results = sum();
console.log(results); // 4
function abc() {
    return 2 - 2; //+5 subtract or addition sath bhi perform kar sakty he
}
let sam = abc(); //()this is argument
console.log(sam); //0
function sum0(num1, num2) {
    let answer = num1 + num2;
    return answer;
}
let result1 = sum0(2, 8);
console.log(result1); //10
function pro0(num1, num2) {
    let answer = num1 - num2;
    return answer;
}
let res = pro0(2, 8); //ye argument he
console.log(res); //-6
// multiply sub add divide sab karsakty he
//DEFULT PARAMETERS
//pehle se built in function. pehle se defult seeting 
function greeting11(message) {
    return message;
}
let rest11 = greeting11("hello hamza");
console.log(rest11);
function greeting(message = " defult hello world") {
    return message;
}
let rest = greeting("hello hamza...."); //defult seeting pr print karwaye ga 
console.log(rest);
//ARROW FUNCTION
// //
let get = () => "hellow.... world!!!!!!"; //this is function
let relt = get(); //this is variable and compulsory
console.log(relt);
let get1 = () => {
    return "hellow world!!!!!!";
};
let relt1 = get1();
console.log(relt1);
