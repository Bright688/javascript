//write a function name calculateSquare()
const prompt = require('prompt-sync')();

//get side of the square from user input
const square=Number(prompt("Enter the side of the square: "));

//function to calculate the area and perimeter of the square
function calculateSquare(side){
   let area=side*side; //calculate the area of the square
   let perimeter=side*4; //calculate the perimeter of the square
   //return the result
   return `The square side is ${area}\nThe perimeter of the square is ${perimeter}`
}

//call the function calculateSquare
let result=calculateSquare(square);
console.log(result);