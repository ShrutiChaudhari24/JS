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