// how data is stored in memory and how we access that data on the basis of that datatypes are categorized into two types

// 1) premmptive (call by value)
     // 7 types :  String , Number , Boolean , null , undefined , Symbol (used to make any value unique) , BigInt 
    
     //  Number
     const score = 20
     const scoreValue = 20.3

     // String
     const str = "My name is Shruti" 

     //  Boolean
     const isLoggedIn = false
    
     // null
     const outsideTemp = null

     // undefined
     let userEmail;
    //  let userEmail = undefined   // we can write like this also

    //  symbol
    const id = Symbol('123')
    const anotherId = Symbol('123')
 
    console.log(id === anotherId)

    //bigInt
    const bigNumber = 15125376476272512441345321n

     

// 2) non premmptive (reference type)
    // Arrays , Objects  , Functions

    // Arrays
    const heros = ["Shaktiman", "naagraj" , "doga"]
    let arr = [10,20,30]
    console.log(arr)
    typeof(arr)

    // Objects : Key Value pair
    let myObj =  {
      name :"Shruti", 
      age : 20
    }

    // functions
   const  myFunction= function(){
     console.log("Hello World");
   }

//    To identify type of datatype we use typeof function
 console.log(typeof bigNumber)
 console.log(typeof outsideTemp)  //object 
 console.log(typeof userEmail)
 console.log(typeof myFunction)
 console.log(typeof myObj)
 console.log(typeof id)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory
//1) Stack(Primitive)  we get a copy
//2) Heap(non Primitive) we get a reference

// stack memory
let myYoutubename ="let's grow"

let anothername = myYoutubename
anothername = "Shruti Chaudhari"

console.log(myYoutubename);
console.log(anothername);


// heap memory 
let user1 = {
  email: "user@google.com",
  upi: "user@ybl"
}

let user2 = user1


user2.email = "shruti@google.com"

console.log(user1.email)
console.log(user2.email)
