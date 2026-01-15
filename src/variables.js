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

//Variable Naming Rules and Conventions
//RULES
//1. Starts with a letter, underscore or dollar sign, NO numbers
//2. Should have no white spaces or hyphens
//3. Is case sensitive
//4. Contains letters, numbers, underscores and dollar signs
//5. Cannot use the reserved keywords eg functions, let, const etc.

//CONVENTIONS
//1. Use camelCase for variables and functions
//2. Use descriptive names
//3. Use PascalCase for class names
//4. Avoid single-letter names
//5. Use const over let expect where the variable's value need to change

