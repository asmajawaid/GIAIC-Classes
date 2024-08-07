"use strict";
//ARRAY
//har terha ka deta add nahe kar sakty. difference btwn array and object. object me ksi ak intity ki bad hu to object me store krey gy. 
// means one person data
//or array me multiple antity store kar sakty he mean students deta. its a collection of data type. array ki positio nikalne kalye.
let fruit_items = ["watermellon", "apple", "peach", "banana", "kiwi"];
// let copyarray = fruit_items.slice(1,2); // copy bnata he original array ko touch nahe karta
// console.log(copyarray);
// let copyarray1 = fruit_items.slice(1,3); // kaha se index start he or kaha khatam(1,3)
// console.log(copyarray1);
// console.log(fruit_items);
// fruit_items.splice(1,0,"grapes"); 
// console.log(fruit_items);
// fruit_items.unshift("mango")
// console.log(fruit_items);
// console.log(fruit_items[2]);
// console.log(fruit_items[2].length); // ak fruit ki length maloom karna
// console.log(fruit_items);
// // fruit_items.shift()
// // fruit_items.shift()
// // fruit_items.shift()
// // fruit_items.shift()
// // console.log(fruit_items);
let f9 = fruit_items.shift(); // ak element bhi baki hoga to wo bhi array me ayega deleted element
console.log(f9);
let f2 = fruit_items.push("chiko");
console.log(f2); //6
console.log(fruit_items.length); //element number btata he  
fruit_items.pop(); // remove karha he or jo bhi remove kya usy return bhi karha he 
console.log(fruit_items);
console.log(fruit_items[2]); //apple
console.log(fruit_items[9]); //undefine
let f1 = fruit_items.pop();
console.log(f1);
// =====================TUPELS============================
//typescript features ap array ki limits set kar sako
// panaverse github
// let fruit_items:string[]= ["watermellon","apple","peach","banana","kiwi"];
// fruit_items:array<number> or :string [] other way of defining aaray types
// let fruits:[string,number] =["asma", 98]
// console.log(fruits);
let fro = [["as", "ma", "jo", "ko"], [2, 5, 6, 8, 9, 8, 6, 5,]];
console.log(fro);
//type alies
// type f = [ string,number,string]
//  let ff:f[] =[]
let fruits = ["mango", "orange", "kiwi", "grapes", "apple"];
console.log(fruits.splice(3, 2)); // which items we removing
console.log(fruits);
fruits.splice(1, 1, "straberry", "blue barry");
fruits.splice(3, 1);
console.log(fruits);
