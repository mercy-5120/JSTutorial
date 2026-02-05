console.log("yffydhu");


document.querySelector("button").addEventListener("click", function changeBGColor(){
    console.log("Hello, We want to change the BG of the page after the button is clicked");
    document.body.style.background = "black"  
});

const users = ["Mercy","Esther","Abby"]

console.log(users.includes("Albert"));

users.forEach(function countCharacters(user){
    console.log(user.length); 
});

