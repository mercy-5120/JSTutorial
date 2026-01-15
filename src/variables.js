let username = "Mercy";

const pi = 3.14159; //number

var isActive = true;//AVOID!!!

console.log("Hello " + username + ".Did you know PI is " +pi);

if(isActive) {
    console.log("The user is active");
}

//Variables store data in memory for later use
//Three ways to declare variables in JavaScript: var, let, const
//const is for unchanging values, let and var are for changing values
//var is function-scoped, let and const are block-scoped. var should be avoided in modern JS to prevent scope-related issues