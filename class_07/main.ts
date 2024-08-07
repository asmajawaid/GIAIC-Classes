// ==============================objects and type OBJECTS AND NESTED OBJECTS==============================================
// storing data =>realated with one intity=>user data

// let user1 : {
//     name: string,
//     age: number,
//     role: string,
// }
// user1 ={
//     name: "asma",
//     age: 34,
//     role: "father"
// }

// console.log(user1.role);

// =============================================TYPE ALIaS=====================
// type alias is most useful for dont repeated code
type User = {
  name: string;
  age: number;
  role: string;
  children?: {
    //opetional bnana ? se
    name: string;
    age: number;
  };
  childeen2?:{
    name: string;
    age: number;
  };
};
let user1: User = {
  name: "asma",
  age: 34,
  role: "father",
  children: {
    name: "abdul hadi",
    age: 9,
  }, 
};

console.log(user1.children?.name);

   let user2 :User ={
            name: "kiran",
            age: 32,
            role: "mother"
        }

        console.log(user2.role);

// ==================================LITERIAL TYPE==========================================

let trafficLights: "Red" | "yellow" | "green" = "Red";  // :colon k bad type literal red di ha taky red hi store hu.

// ===================================UNION | ===============================
// koi bhi ak data use kar sakty he.
let age: string|number ="fourteen" // allow string and number both  type.
console.log(trafficLights,age)    // | ia called union used for multiple data type in variabe


type Student ={
    name: string,
    rollNumber:number
};

type Teacher ={
    name:string,
    experiance:number
}

let student1:Student ={
    name:"asma",
    rollNumber: 1234,
}

let teacher : Teacher={
    name:"Hamzah",
    experiance: 10,
}
// ======================intersection==&===========
//common property intersection me ak bar ati he. student or teacher dono ka data use kary gy.
// ager yah | laga den to error serf access karny per ayega console.log(both1.rollNumber).
let both1 : Student & Teacher ={
    name: "zaid",
    rollNumber:1234,
    experiance: 5,
}

console.log(both1.experiance);











