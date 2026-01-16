//Control structures and logic fo rthe application
//loops and conditionals
//Conditional statements - if, else if, else, switch

/*let temperature = 17;
if (temperature > 25) {
    console.log("Turn on cooling AC");
} else if (temperature >= 20 && temperature <= 25) {
    console.log("Perfect Temperature. No action needed");
} else {
    console.log("Turn on heating AC");
}*/


//TASK: Using if else, do a grading system where >80 logs A, above 65 logs B, above 50 logs C, and below 50 logs Fail

/*let Mean = 81;
  if(Mean>80){
   console.log("Mean Grade: A");
  }
  else if(Mean>65){  
   console.log("Mean Grade: B");
  }
  else if(Mean>50){
   console.log("Mean Grade: C");
  }
 else{
     console.log("Fail!");
 }
*/

 //Do the conditions using a switch statement


 //LOOPS - for, while, do while
 //Loops are used to repeat a block of code multiple times until a certain condition is met
//They have three main parts: initialization, condition or ending point, and increment/decrement

//For loop - checks condition first before executing the block of code
//for(initialization; condition; increment/decrement)
for (let i = -6; i <= 5; i+=3) {
    console.log("Iteration: " + i);
}
 

//Task using a loop, log all even numbers between 1 and 20
for(let i = 1; i<=20; i++){
    if(i%2 == 0){
        console.log("Even number: " + i);
    }
}
//While loop- checks condition first before executing the block of code



//Do while loop - executes the block of code once before checking the condition

//Assignment;Explore while and do while loops and implement the even numbers task using both loops