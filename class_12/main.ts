//async.home work .search async by hamzah syed .try cathch
//callBack hell homework. oop home work.
console.log("first");

setTimeout(() => {
  console.log("second");
}, 3000); //by default 0 settimeout hoga

console.log("third");

//call back

// function orderPizza() {
//     setTimeout(() => {
//        return orderPizza
//     }, 2000);
// }

// let result = orderPizza()
// console.log(result); //return nahe lagta

type fn = () => void; //function data type bnane ka tarika

function orderPizza(preparePizzaCb: fn) {
  setTimeout(() => {
    console.log('order Placed');
    preparePizzaCb(); //call karna function ko
  }, 2000);
}
function preparePizza() {
  setTimeout(() => {
    console.log("prepared pizza");
  }, 5000);
}
// function delivery() {

// }

orderPizza(preparePizza); //ager () lagaye gy to prepared pizza pehle hi chal jayega

// await orderPizza()
// await preparePizza()
// await //promise apply hoga jab hi await lagyga
//promises
//1.resolve(.then), 2.reject(catch)
//resolve ka name kuch bhi rakh sakty he 

function checkMarks() {
  return new Promise((resolve, reject) => {
    let marks = 92;
    setTimeout(() => {
      if (marks >= 90) {
        resolve("Party!!!!");
      } else {
        reject("nalaik!!!!");
      }
    }, 5000);
  });
}
// checkMarks().then(() => {   //then btata he k resolve chaly to ye print hu re
//   console.log("party!!!!");
// })// ; semicolon nahe ayega yaha
// .catch((err)=>{
//     console.log(err); //yaha no party bhi likhdy to chal jayega
    
// })

//async await (.then ka alternate) always apply with promises
//typescript k new version me await function k bna bhi use kar sakty he
// .thrn.cath lagany ki zarorat nahe he 
let res = await checkMarks()
console.log(res);
