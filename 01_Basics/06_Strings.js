// In javascript strings can be denoted by " "  or ' '
console.log("hello"+'world')        // + used for combining two strings

const name = "Shruti"
const repoCount  = 10

console.log(name + repoCount +" Value")    //Not a good syntax ; outdated , In modern days no one likes to write like that

//more readable and relaiable
console.log (`Hello my name is ${name} and my repo count is ${repoCount}  `);  // make place holders ` `; write variables using $ symbol 

// one more way to declare string by creating objects 
const gameName= new String ('Chess')
console.log(gameName)
console.log(gameName[0])
console.log(gameName[1])
console.log(gameName[2])
console.log(gameName[3])
console.log(gameName[4])

console.log(gameName.__proto__)