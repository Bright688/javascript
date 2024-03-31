//create a program that prints a half pyramid using asterisks

const prompt = require('prompt-sync')();
//get number of pyramid from user input
const pyramid=Number(prompt("Enter number of pyramid to print: "));
let line=''
for(let x=0; x<pyramid; x++){
    line +=''+'*';
    console.log(line)

}
