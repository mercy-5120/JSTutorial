//Operators in JavaScript
//1. Arithmetic Operators: Used for mathematical calculations. + - * / % ++ --
let age = 30
age++
//Modulus - gets the remainder after whole number division
console.log(5%2);//answer is 1 because 2 goes into 5 two times with a remainder of 1

//2. Assignment Operators: Used to assign values to variables. = += -= /= %=
let score = 50
score +=10//equivalent to score = score +10     same for other operators
console.log(score)
//3. Comparison Operators: Used to compare two values. == === != !== > < >= <=
console.log(5 == '5');// true- checks value only
console.log(5 === '5');//false - checks value and type
console.log(5!= 1);//true
console.log(5!== "5");//true
console.log(3>2);//true and same for other comparison operators


//4. Logical Operators: Used to combine multiple conditions. && || !
let isAdult = true;
let hasID = true;
if (isAdult && hasID){
    console.log("Allowed to enter the  club");
}

//5. Type Operators: typeof, instanceof
console.log(typeof age);//number
