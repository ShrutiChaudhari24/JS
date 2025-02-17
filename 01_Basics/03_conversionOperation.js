//let  score = "18abc" // If we had written only 18 then it give o/p as 18 but here 18abc is a string so o/p will be NaN
//let score = null
//let score = undefined 
let score =  true

//"18" => 18
//"18abc" => NaN
//true => 1; false =>0

console.log(typeof score)
//or
console.log(typeof(score))

let valueInNumber =  Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)  //18abc o/p => NaN(Not a Number)  , //null o/p => 0 , //undefined o/p =>NaN , //true o/p => 1

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false
//"" (empty string) => false ; "Shruti" => true

let anyNumber = 18

let stringNumber = String(anyNumber)
console.log(typeof stringNumber)
console.log(stringNumber)

// ************************ Operations ************************

let value = 6
let negValue = -value
console.log(negValue) 

console.log( 18 + 20 )
console.log( 18 - 20 )
console.log( 18 * 20 )
console.log( 36 / 160 )
console.log( 2 ** 6 )     // 2 to pow 6
console.log( 10 % 5  )

let str1 = "Hello"
let str2 = "Shruti"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2 )  // o/p => 12
console.log(1 + "2" )  //o/p => 12
console.log("1" + 2 + 2)  //o/p => 122       //if string is first whole expression is treated as string
console.log(1+ 2 + "2" )   //o/p =>32        

console.log((3 + 4) * 5  % 3 )

console.log(true)  //o/p => true 
console.log(+true) //o/p => 1
console.log(+"")   //o/p => 0

let num1 ,num2, num3
num1 = num2 = num3 = 2 + 2 // don't do like this 

let gameCounter = 100
gameCounter++;  // (postfix)first use then increment
// ++gameCounter;  // (prefix)first increment then use
console.log(gameCounter);
