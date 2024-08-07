//tsc main.ts && main.js dono cammand ak sath compile or print hojaye gi
// cmd me ager upper arrow ki press karey to br br likhna nahe parega

console.log("Hello world");
console.log("Hello hamza");


let numberOfFaculity: number = 4;
let numberOfManagement: number = 3;
let numberOfAbsentManagement: number = 2;

//multipilation
let totalNumberOfFaculty = numberOfFaculity * 21;  //whole batch faculty member total
//console.log( totalNumberOfFaculty);  //get 4*21=84 answer

// console.log(numberOfFaculity + numberOfManagement); //get 7 

//console.log( numberOfFaculity + numberOfManagement - numberOfAbsentManagement); // get 5


//diviion
let biryani = 20
console.log(biryani / totalNumberOfFaculty); //get0.23 kg for one person of faculty

//HOME WORK SLIDE 121==================
//NEW TOPIC concatination
//use addition sign to concatination 
let firstName = "Hamza";
let age = 23;
console.log("hello! My name is:" + firstName + " " + "and my age is:" + age) // this is a old code

// for space IN PRINTING use ${} sign
console.log(`hello my name is: ${firstName} and my age is: ${age}`);

//unnary operators(++) (--)
//jo bhi curent value he us me 1 ka increment karega means 11
let index = 10;
++index; //10+1
++index; //11+1 
++index; //12+1
++index; //13+1
++index; //14+1
console.log(index);

let indexN = 10;
++indexN; //10+1=11
--indexN; //11-1 =10
++indexN; //10+1=11
--indexN; //11-1=10
--indexN; //10-1=9
console.log(indexN);

 //121, 131 home work
let index1= 10; 
// 11+12+6+11-2
let result = ++index1 + ++index1 + 6  + --index1  -2;
console.log(result)

//ASSIGNMENT OPERATORS (=, += ,-=)  
// hum variable ko value assign karty he  let num2 : number = 20; equal ka sign he ye operator
console.log('ASSIGNMENT OPERATORS');

let num1 : number =20;
num1 -=22 
console.log(num1)


let num3 : number =20;
num3 +=22 
console.log(num3);

let num4 : number =20;
num4 *=22 
console.log(num4);

let num5 : number =20;
num5 /=22 
console.log(num5);

// COMPARISION OPERATORS
//1 is double equal to ==
//6 == 8
let num6 =4;
let num7 =6
console.log(num6 == num7) //answer is false (boolean me ans dega)
 
// let Num =6 ; //error
// let Num0 ="6"
// console.log(Num == Num0); //"6" == 6 (true) error ayega isn't useful
//console.log(Num === Num0); //"6"=== 6 (false)
// double == to me daata type nahe dekhta but === me data type dekhta he hmara browser

//2 != NOT EQUAL TO

//let Num =6 ; 
//let Num0 =6
//console.log(Num != Num0); //get ans false 
//3 lessthan
let Num =6 ; 
let Num0 =6
console.log(Num < Num0); // get false answer

//GREATER THAN
let a=6;
let b=6;
console.log(a>b); //get answer is false


//bara he ya equal he >=
let c =61;
let d =19;
console.log('>:',a >= b);

let e = 6;
let f = 19;
console.log(e != f); //get  ans true
 
//SYNTEX ERROR NEW TOPIC
//code likhne ka tarika

//practice
//console.log(typeof numberOfManagement);
let x=5
let y = 2

let z: number
z = ++x + x++ + --y + y-- + x + y++ +  y

console.log(z); //22



let text1 = "20";
let text2 = "5";
let result0 = text1 < text2;
console.log(result0);