/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain concepts as you are speaking to a 12 years old
*/

/* In JavaScript, the main datatypes we have are:
 - number (all kind of number like intiger, float...; for example: 3 , 2.34)
 - string (all data you put into quotation mark like: "Hello" , "12 5" , "true"
 - boolean (which has two value: true or false)
 we have also special number:
 - Infinity
 - -Infinity
 - NaN (Not a Number)
 - null
 - undefined */

/* EXERCISE 2
Describe what is a variable. Try to explain the concept as you are speaking to a 12 years old
*/

/* A variable is like a box in which we can put a value and then we can work with it. */

/* EXERCISE 3
Write the code to execute a SUM between the number 12 and 20.
*/

 
let number1 = 12
let number2 = 20
let sum = number1 + number2
console.log(sum)


/* EXERCISE 4
Create a variable named x containing the number 12.
*/

 let x = 12

/* EXERCISE 5
Create a variable named name containing the string John Doe.
*/

 let name = "John Doe" 
 

/* EXERCISE 6
Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
*/

 let x = 12
console.log(12 - x) 

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

 let name1 = "john"
let name2 = "John"
console.log(name1 !== name2)
console.log(name1 === name2.toLowerCase())

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

 let x = 6
if(x === 1) {
    console.log("one")
} else if(x === 2){
    console.log("two")
} else if(x === 3){
    console.log("three")
} else if(x === 4){
    console.log("four")
} else if(x === 5){
    console.log("five")
} else if(x === 6){
    console.log("six")
} else if(x === 7){
    console.log("seven")
} else if(x === 8){
    console.log("eight")
} else if(x === 9){
    console.log("nine")
} else {
    console.log("the number is greater than or equal to ten")
}


/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

/* let x = 3
let y = 5
let z = 8
let a = x * y + z
console.log(a) wrong*/ 
let u = 2
let o = 1
let result = u > o? "u is biger" : "u is less"
console.log(result)
/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 17.00 GMT +1. In the next days we'll also learn how to use GIT 
*/