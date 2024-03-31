const prompt = require('prompt-sync')();
let x=2;
const userInput=prompt("Enter number to check even or odd number: ");

if(userInput%x==0){
    console.log(`The number ${userInput} is an even number`);
}

else{
    console.log(`the number ${userInput} is an odd number`);
}