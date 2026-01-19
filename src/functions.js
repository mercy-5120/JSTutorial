//Functions are a block of code designed to perform a particular task
//They are reusable and can be called multiple times
//They can take inputs (parameters) and can return an output

//Function Declaration
function convertDollartoKsh(amountInUSD){
    const exchangeRate = 131;
    const amountInKsh = amountInUSD * exchangeRate;
    return amountInKsh;
}

//Return keyword is used to return a value from the function/ end the function with a result
//Function Call/ Invocation

console.log(convertDollartoKsh(1));
console.log(convertDollartoKsh(205));
console.log(convertDollartoKsh(50));
console.log(convertDollartoKsh(100));
console.log(convertDollartoKsh(90000000));   

//Write a funcction that takes a number abd saays whether it's even or odd
function checkEvenOdd(number){
    if(number % 2==0){
        return "Number is Even!";
    }
    else{
        return "Number is Odd!";
    }
}

console.log(checkEvenOdd(23));
console.log(checkEvenOdd(12));
console.log(checkEvenOdd(2445781));
console.log(checkEvenOdd(23456));
console.log(checkEvenOdd(123437));
