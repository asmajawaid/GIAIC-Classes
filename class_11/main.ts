// ascronys javascript -homework


let num1 = 18;
let bb="jojoj"
console.log(bb[0].toUpperCase() + bb.slice(1)); //first letter capital

// narrowing typescript feature

let a : string | number //union 
// a.               // dono me common method jo hogy wo ajayegy
a= 10;    //number //narrowing is process of converting two data type in one. narrowing me original data type change nahe hoti hum bad me dosre value assign kar sakty he            
// value assign kardi ab yaha narrow kar k number krdiya he do data type se ak type me narrowing hona
a.toFixed()           //ab yaha number k method ayega
a ="asma" //narrowing
a.toUpperCase() //string


console.log(typeof num1); //javascript function
let ll = true
console.log(typeof ll == "boolean"); //true boolean == boolean;
//typeof k answer text ki sorat me ata he
let jj =18
console.log(typeof jj == "boolean"); //false "number" == boolean; //false ayega answer

// console.log(Math.random()) //generate random number
let gg = Math.random() *10 // * 10 ya 100
console.log(gg.toFixed(2));
console.log(gg);

//ternary operator is a part of if else
 let random = Math.random()
 console.log(`my random number is: ${random}`);
 
 let aa = random > 0.6 ? " Hamzah" : 16;
//  console.log(aa);
 
//typeof called type card
// let aa = random > 0.6 ? " Hamzah" :
//  random >0.8 ? "ali" :16 //2 condition sath lagana

if (typeof aa == "string"){ // (this is type gard)
    console.log("Narrowing - string");
    
}else{
    aa // always is number after condition of if besause string number remaining
}
console.log(aa);

//is condition kiwaja se narrowing horhe he hmarey pas

// null ...ksi bhi variable ko intentionally khali chorna he to null rakh tedy like age salary
let age:null | number = null
let salary:null | number = null
age = 18;
salary = 200000;


// interface //serf object ki data type bna sakty. objects methods
//type alies me ksi bhi tarha ki type bna sakty he like traffic light

interface user {
    name: string;
    age : number;
    address : {
        city: string;
        state: string;

    }
}
 let user1: user ={
   name: "asma",
   age : 32,
   address : {
       city: "karachi",
       state: "sindh",
 },
 }


//structrual typing

interface Deal1{
    food: string,

}
interface Deal2{
    food: string,
    drink: string,
}
//objects
let mudasirOrder : Deal1={
    food: "biryani",
}

let muhammadOrder : Deal2={
    food: "biryani",
    drink: "sting"
}
//assigning value
let mudasirTable : Deal1 = muhammadOrder;
console.log(mudasirTable);
// let muhammadTable : Deal2 = mudasirOrder; //error
let muhammadTable :Deal2 =muhammadOrder
console.log(muhammadTable);

//use 2 deals with intersection sign & with one person

// stale object mudassirordr. muhammadOrder porana object.
// let mudasirTable : Deal1 = muhammadOrder; //extra property per error nahe dega q k stale object he 


// fresh object me extra property allow nahe he nechy wala fresh object he
// let mudasirTable:Deal1 = {
//     food: "biryani",
//     drink: "sting" //extra propert show error
// }








