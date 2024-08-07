console.log("Hello, World!");
//==========change the value of variable=====
//dono value print hogi.

let favouriteColor="blue";
console.log(favouriteColor)

favouriteColor=`green`;
console.log(favouriteColor[3]);//e

console.log(favouriteColor)



//==========VARIABLES=========

var message = "hello herry! can i help you?";
console.log(message);

let a_bc = "Hello herry!How are you?";
console.log(a_bc);

const d2d = "hello! What's your name?";
console.log(d2d);

// // let x = 10
// // const y = 11
// function scope(){
//     // let x = 20;
//     // const y = 22;
//     if(true){
//         let x = 30;
//         const y = 33;
//         console.log(x);
//         console.log(y);
//     }
//     // console.log(x);
//     // console.log(y);
// }
// scope()
// // console.log(x);
// // console.log(y);


//=========== 3 DATA TYPES =========

let firstName = "asma ";            //(inference) typescript bna kr deta he 
let age = 22;
let comuterON = true;              //(strong data type khud likhty he)
console.log(firstName+age+comuterON)


let lastName: string ="asma";                                   //string
let experiance: number =32;                                    //number
let married :boolean = true;                                   //boolean
let randomValue: any ="https://www.linkdin.com.in/ameen-alam"; //any
console.log(lastName+" "+experiance+ " "+married+" "+randomValue)

// string concatenation
let FirstName: string ="asma"; 
let LastName: string ="jawaid"; 
let fullName: string =FirstName+ ' ' +LastName; 
console.log(fullName);

let FirstName0: string ="jawaid"; 
let LastName0: string ="iqbal"; 
let fullName0: string = `${FirstName0} ${LastName0}`;  //TEMPLETE LITERAL
console.log(fullName0);


// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;


let num1= 5;
let num2= 10;
console.log(num1 + num2)

let n01= "5";
let n02= 10;
console.log(n01 + n02)

let No1= "5";
let No2= "10";
console.log(No1 + No2)


let num3= 5;
let num4= 1;
console.log(num3 - num4)

let num5= 5;
let num6= 9;
console.log(num5 * num6)

let num7= 50;
let num8= 10;
console.log(num7 / num8)

//MODULUS
let num9= 10;
let num10= 3;
console.log(num9 % num10)

//Exponentiation
 let n1 = 2;
 let n2 = 2;
 console.log(n1 ** n2); 

// ============================================
// let x ="5"
// let y = 5 
// let result : boolean =( x == y)
// console.log(result); //undefine
