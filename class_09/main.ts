// HOME WORK...chat gpt enum example with switch cases
// while loop parh kr ana. any unknown difference

// =======================ENUMS===============typescript feature. use with condition. and switch cases.
// for storing data type: alternate of type literal and union: like trafic lights.use as a data type and value 
// q use : hum apni marzi se index No rakh sakty he. = laga kr like red = 2, to next item green 3 hoga usky bad index start hogy.
// if else k sath type error ayega. but ksi had tak ho sakta he.
//neta7vely supported nahe he javascript me.


enum color {
    Red, //0
    Green ,//1 
    Yellow  //2
};
// enum color {
//     Red yah 0 hoga
//     Green = 2
//     Yellow  = 3
// };
// enum color {
//     Red=2
//     Green =3 
//     Yellow =4
// };


let traficLight : color = color.Red;
    //        data type             value
    // console.log(color[2]); // print yellow

    // console.log(color.Yellow); // print index number 2
    // console.log(color["Green"]); // 1 index No

    // enum bata raha he condition kesy rakhni he 
    if( traficLight == color.Red
    ){
        console.log("stop!!!!");
        
    };

// ============LOOPS=============
for (let i = 0; i < 10; i++) {
    console.log(`sorry ${i}`);
   
}
// i += 2 two ka increment hoga

for (let i = 10; i > 0; i--) {
    console.log(i);
}

// let fruits0 =["apple","mango","Banana"]

// let i = 2;
// console.log(fruits0[i]);

let fruit =["apple","mango","Banana"]
 
// for (let i = 0; i <= 2; i++) {
//     console.log(fruit[i]);
    
// }
// for (let i = 0; i <= 2; i++) {
//     console.log(fruit[1]);
    
// }

let fruits =["apple","mango","Banana","kiwi","orange"]

for (let i = 0; i < fruits.length; i++) {  //i<=fruits.length loop akbar ziada chaly ga islye length k sath = nahe lagaty
    console.log(fruits[i]);
    
};
// ==============type any unknnowm========================
// any error nahe deta kuch bhi store kar sakty hu
let age : any 
age = 100
age = true;
age =[]
age.jhhjhjhj
// unknown maloom nahe 
let age1 : unknown 
age1 = 100
age1 = []
age1 = "000"
// age1.jhjhk error dega save he ye

// difference data fatching  dosre computer se karty hwe maloom nahe hota type to unknown likhety he

