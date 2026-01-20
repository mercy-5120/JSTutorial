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

//Write a funcction that takes a number and says whether it's even or odd
function checkEvenOrOdd(number){
    if(number % 2==0){
        return "Number is Even!";
    }
    else{
        return "Number is Odd!";
    }
}

console.log(checkEvenOrOdd(23));
console.log(checkEvenOrOdd(12));
console.log(checkEvenOrOdd(2445781));
console.log(checkEvenOrOdd(23456));
console.log(checkEvenOrOdd(123437));

//Write a function that takes in age and returns whether a person is eligible to vote or not

function eligibleToVote(age){
    if(age<0 || age>120){
        console.log("Invalid age input!");
    }
    else if(age>=18){
        console.log("Eligible to vote!");
    }
    else{
        console.log("Not Eligible to vote!"); 
    }
}

eligibleToVote(20);
eligibleToVote(15);
eligibleToVote(119.999999);
eligibleToVote(25);
eligibleToVote(-7);