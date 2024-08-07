"use strict";
// ==================ANY =============================
// apka koi bhi error nahe dety kuch bhi likhy errors nahe aty.
//any k ilawa console me bhi koi complain nahe ati
//  let age:any;
// age = "",
// age.hj.kjbj = 2
// ==========================UNKNOWN=====================================
//koi methids use nahe hoty unknown me hum vhah rahy he ye suppose karly
// let ages :unknown;
// ages = 18;
// (age as number).toFixed(2)     //method 1   // serf isi line me suppose ki he data type
// let newage = ages as number   //method 2            //exeplasing  type casting
// newage.toFixed(2) //yaha type wohi hogi unknown
// console.log(newage);
// (<number>age).toFixed(2)       //method 3
let price = 18.4;
price.toFixed(2); //18.40
// let bb = "18.5"
// console.log(bb.tofixed(2)); //error
// =================================================================
function sum(sum1, sum2) {
    return sum1 + sum2;
}
console.log(sum(5, 5));
function sums(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        // console.log(rest[i]); //ak aka kr k acess karna
        total += rest[i];
        // total += rest[0] //0me 10plus krna 3 br 10ko add kary ga print 30hoga q k argument me 3 number pass kry he
    }
    console.log(total);
}
sums(10, 20, 30);
// console.log(rest);
function abc(...rest) {
    let total = 0;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }
    ;
    console.log(total);
}
;
abc(20, 20, 30);
// ================OVERLOAD FUNCTION==============
// combination me argument check karta he
// function add(arg1:number,arg2:number):number
// function add(arg1:string,arg2:string):string
// function add(arg1:boolean,arg2:boolean):boolean
// function add(arg1:any,arg2:any):any {
//    return arg1 + arg2   
// };
// console.log(add(10,20))
// console.log(add(true,false))
// console.log(add("as", "ma"))
// ===================REAL WORLD example=============home work
// login function bnana he. 1 function hoga 2overloads hogy. pehla email,password.
// dosra serf email except karey ga
// function add1(arg1:string,arg2:string):string
// function add1(arg1:string):string
// function add1(arg1:boolean,arg2?:boolean):void
// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// // const d3 = makeDate(1, 3);
// // console.log(makeDate(10,5,3));
// console.log(d1);
// console.log(d2);
// function display(a:string, b:string):void //Compiler Error: Duplicate function implementation
// {
//     console.log(a + b);
// }
// function display(a:number): void //Compiler Error: Duplicate function implementation
// {
//     console.log(a);
// }
// function login(email:string,password:string):string
// function login(email:string):string
// function login(email:string,arg2?:boolean):void
