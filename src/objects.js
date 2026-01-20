//An object is a collection of labelled related data, store under one variable name
//An object has properties; value pairs, separated by commas
//The values of an object can be of any data type including a function or array or even another object.
//We use the dot notation to access the properties of an object

const student = {
    fullName: "Jane Doe",
    age: 19,
    isEnrolled: true,
    modules: ["Mathematics", "Physics", "Chemistry"],
    address: {
        county: "Nairobi",
        subcounty: "Langata",
        street: "Madaraka",
    },
    clan: "Aambui",
    submitAssignment: function sendingEmailAssignment(subject){
        console.log("A simulation of submitting an assignment for " + subject);
        
    },
}

console.log(student.clan);
console.log(student.fullName);
console.log(student.age);
console.log(student.address.county);
console.log(student.modules[0]);
console.log(student.modules[1]);
console.log(student.modules[2]);
console.log(student.isEnrolled);
student.submitAssignment("Mathematics");

console.log(typeof student);
console.log(typeof console);

//console is an object of JS with properties and methods
console.table(student)
//JavaScript has many built-in objects like Math, Date, String, Array etc
console.log(Math.sqrt(56));


//Find out why we are not using the name of the function when calling it

//Array - is a special type of object used to store indexed/ ordered collections or list of items

//Whenever you create an array using the literal syntax, you are creating an Array object and you can inherit its methods and properties
const fruits = ["Mangoes", "Bananas", "Oranges", "Pineapples", "Grapes"];
fruits.push("Watermelon");
console.log(fruits);
console.log(fruits[5]);
console.log(fruits.length);
console.log(typeof fruits);
console.log(fruits.filter(fruit => fruit.startsWith("M")));

//Whenever you create a string using the literal syntax, you are creating a String object and you can inherit its methods and properties
let city = "Nairobi";
console.log(city.toUpperCase());
console.log(city.includes("rob"));
console.log(typeof city);
console.log(city.startsWith("N"));
console.log(city.startsWith("o"));

//Whenever you create an object using the literal syntax, you are creating an Object object and you can inherit its methods and properties
