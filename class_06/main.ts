//VARIABLE SCOP: 
// { its called block}
//{} is me ya ksi block me koi variable bnaya he to wo local variable kehlata he iska koi scop nahe hota 
//local variable serf curly bracs me use ho sakta he 
//pehle console karwaye gy waha error ayega q k lazmi pehle variable bnaty he or phr consolee karty he
// console.log(kam); error ayega 
// let kam ="koko"


let age = 18; //its global variable jaha chaye use kar sakty he

if (true){  
                     //direct true likha he to console hoga answer 18 hi ayega 
    console.log(age);         //18
}

if (true){
    let myage = 9;
    console.log(myage); //9
}

let myage= 17;   // ak name k do variable yaha ban sakty he yaha global or local variable same name se ho sakta
//  he block variable ko nahe maloom k bAHAR kya kam horaha he
if (true){
    let myage = 9; //9
    console.log(myage);
}

//HOISTING : javascript feature. var me hoisting hoti he
// variable ko declaire karna 
// value assign nahe kareyg7y to undefine ayega
//var se jab bhi variable bnaty hu to uski declariation uthe kr top per chali jati he isliye undefine ata 
// let num1=10; 
// console.log(num1)

// let age; //declare karna
// console.log(age);
// let age =18;  //Initialized karna
















