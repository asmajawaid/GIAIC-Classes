"use strict";
//171
// IF AND IF ELSE
//ager apne koi code conitionously chalana he usky liye ap if else use karty He .
let percentagae = 90; //if put a value of less then 90 so printing value is no party. if greater thann 90 so print party  
if (percentagae >= 90) { // this is condition in round braket
    console.log("party!!!!"); // if is true
}
else { // else is false
    console.log("NO party!!!!");
}
;
// let percentage1 =40;
// if percentagae1 (percentage1 >= )
//true hoga to print hoga or false hoga round braket me to nahe print hoga curley braket ka 
let a = true;
if (a) {
    console.log("hello");
}
// LOGICAL OPERATORS=============
// and && operator
// or ||
// ye jab use hoty he jab 2 condition ho and do conition ko mila kar banta he
//AND operators 
// doono conition ko && se ak karna sekha humne e.g log in email or passward dono ana chaye 
let achiJob = true;
let canCook = true; // check with false value so answer is false ak bhi false hoga to answer flase hojaye ga
// answer true ayega dono true ayega to code chaly ga
if (achiJob && canCook) {
    console.log("RISHTA pakka!!!");
}
else {
    console.log("Rejected!!!");
}
// OR operator 
// dono me se ak bhi true he to result true ayega
let beautiful = true; // put the value true here
let rich = false;
if (beautiful || rich) {
    console.log("rishta pakka!!!");
}
else {
    console.log("Rejected!!!");
}
// TERNORY OPERATOR condion likh sakty he bht choty code me 
let hungrey = true;
let snake = hungrey ? "apple" : "water";
console.log(`are you eating ${snake}`); //: else ko represent karha he or ?if ko represent karha he
let age = 19;
let result = age >= 18 ? "you are allowed" : "you are not allowed";
console.log(result);
let mypercentage = 85;
// 90 ya 90 se ziad ho to chaly ga. write first condition if % 0 ya 100 hu
if (mypercentage >= 100) {
    console.log("youor % must be in 0 to 100");
}
if (mypercentage >= 90) { // ager 90% hu to first if ko prefer karey ga ( my% >=90 && my% <=100)
    console.log("your grade is: A+");
}
else if (mypercentage >= 70) {
    console.log("your grade is : A");
}
else if (mypercentage >= 60) {
    console.log("your grade is: B");
}
else {
    console.log("Fail");
}
