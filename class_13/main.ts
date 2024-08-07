//university management system home work
//OOP ==crototypes
//JS bhi OOP me bni hwe waha bhi sab chezen . se aceess hoti he
//class green color me show hoti he. multiplle time use kar sakty he class ko or add bhi kar sakty he hum is blue print me
class House {
  ownerName: string; //= "Hamzah"; jb this. lagaya to is name ki zaroor\t nhe
  readonly address: string; //= "A123";
  // numberOfDoors:number = 2;
  //constructor function ki madad se hum sab owner kka data change kar sakty he


  constructor(name: string, adrs: string) {
    this.ownerName = name;
    this.address = adrs; //adrs parameter se aya or address class se arha he
  }

bell(){
    console.log("DING DONG", this.address);
    
}
}

//class ko use karty hwe h1 name ka objct  bnaya he
// let h1 = new House("HAMZAH", "A123"); //class ko jab call karty he to sabse phly constructor call hota he
// h1.bell()


// h1.ownerName ="omer";
// console.log(h1.ownerName);
// h1.address ="B321"; read only 
// console.log(h1.address);

// let h2 = new House("ALI", "A124");
// let h3 = new House("ASMA", "A125");
// console.log(h3);

// console.log(h1); //h1 object he
// console.log(h1.address); // called.notation
// console.log(h1["address"]); //same dono method


//Principle of OOP
//1.inheretence. parents me bht se similirties hoti he. child me bhi un me se kuch chezen similler hoti he.like face

class Animal {
    name!: string; //name k agey !(Assertion operator) laga dy error nahe ayega
    eat!: string;
    constructor(name:string,eat:string){
        this.name =name;
        this.eat = eat;
    }
    
}
// class Cat extends Animal{
//     eyecolor: string;
//     constructor(name:String,color:String){
//         super(name)    //parent class k super constructor ko call karny kalye
//         this.name = aniname;
//     }
//     cat(){
//     console.log("Meow Meow");
//     }
// }
// let c1 = new Cat("yoyo", "milk")
// console.log(c1);
// c1.cat()
// console.log(c1.name);
