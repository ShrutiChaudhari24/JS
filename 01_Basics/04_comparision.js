// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)           //this all are the common comparisions 
// console.log(2 <= 1)
// console.log(2 == 1)
// console.log(2 != 1)


// what if we compare the different datatypes values 

//TypeScript is a programming language in which already rules are there that we can not compare two different datatypes value
//if we follow this types of rules by our own their is no need t learn Typescript
// console.log("2" > 1)
// console.log("02" > 1)

console.log(null >= 0)
console.log(null == 0)
console.log(null <= 0)  //o/p=>true
console.log(null < 0)   //o/p=>false
//The reason is that an equality check == and comparisons > < >= <= works differently.
//Commparisions convert null to number, treating it as 0. That's why (3)null <= 0 is true and (1) null < 0 is false

console.log(undefined >= 0)
console.log(undefined == 0)      // undefined is not treated like 0
console.log(undefined <= 0) 
console.log(undefined < 0) 


// '===' Strictly Check 
// (==) does not check datatypes (===) also checks datatypes 
console.log("2" == 2)   //o/p => true
console.log("2" === 2)   //o/p => false