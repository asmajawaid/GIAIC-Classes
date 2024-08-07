"use strict";
// ==============================objects and type OBJECTS AND NESTED OBJECTS==============================================
// storing data =>realated with one intity=>user data
var _a;
let user1 = {
    name: "asma",
    age: 34,
    role: "father",
    children: {
        name: "abdul hadi",
        age: 9,
    },
};
console.log((_a = user1.children) === null || _a === void 0 ? void 0 : _a.name);
let user2 = {
    name: "kiran",
    age: 32,
    role: "mother"
};
console.log(user2.role);
// ==================================LITERIAL TYPE==========================================
let trafficLights = "Red"; // :colon k bad type literal red di ha taky red hi store hu.
// ===================================UNION | ===============================
// koi bhi ak data use kar sakty he.
let age = "fourteen"; // allow string and number both  type.
console.log(trafficLights, age); // | ia called union used for multiple data type in variabe
let student1 = {
    name: "asma",
    rollNumber: 1234,
};
let teacher = {
    name: "Hamzah",
    experiance: 10,
};
// ======================intersection==&===========
//common property intersection me ak bar ati he. student or teacher dono ka data use kary gy.
// ager yah | laga den to error serf access karny per ayega console.log(both1.rollNumber).
let both1 = {
    name: "zaid",
    rollNumber: 1234,
    experiance: 5,
};
console.log(both1.experiance);
