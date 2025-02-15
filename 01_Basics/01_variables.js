const accountId = 123567
let accountEmail = "abc@xyz.com"
var accountPassword = "567431"   
accountCity = "Nagpur"  // this is not a good practice but in JS it is possible
let accountState;    // not assigned any value undefined is assigned

// now a days instead of using var peoples use let to avoid the problem of scope

// In initial days JS does not have any control on block scope .

/* for eg- one programmer came he wrote any value in accountPassword after that,
 another programmer came he created a for loop and used same variable name accountPassword 
and assigned any different value then the value which is written by first programmer get changed */

// so prefer not to use var because of the issue in block scope and functional scope 



// accountId = 100;
// TypeError: Assignment to constant variable.
// console.log(accountId);

accountEmail ="pqr@lmnop.com"

accountPassword ="171717117"

accountCity= "Mumbai"

// console.log(accountEmail)
// console.log(accountPassword)
// console.log(accountState)

// Instead of writing console.log again and again we can simply use the second method of console which is table
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// we will get output like this 
// ┌─────────┬─────────────────┐
// │ (index) │ Values          │
// ├─────────┼─────────────────┤
// │ 0       │ 123567          │
// │ 1       │ 'pqr@lmnop.com' │
// │ 2       │ '171717117'     │
// │ 3       │ 'Mumbai'        |
// │ 4       │ undefined       │
// └─────────┴─────────────────┘