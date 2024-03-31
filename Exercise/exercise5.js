
const prompt = require('prompt-sync')();
//get grade from user input
const grade=Number(prompt("Enter grade of student: "));
// Determine grade level based on the grade entered
let gradeLevel;

if (grade >= 90 && grade <= 100) {
    gradeLevel = 'A';
} else if (grade >= 80 && grade < 90) {
    gradeLevel = 'B';
} else if (grade >= 70 && grade < 80) {
    gradeLevel = 'C';
} else if (grade >= 60 && grade < 70) {
    gradeLevel = 'D';
} else if (grade >= 0 && grade < 60) {
    gradeLevel = 'F';
} else {
    console.log("Invalid grade entered.");
    process.exit(1); // Exit the program if grade is invalid
}

// Use switch case to print a message based on the grade level
switch (gradeLevel) {
    case 'A':
        console.log("You got an A, so here's a chocolate for you.");
        break;
    case 'B':
        console.log("You got a B, so here's a cookie for you.");
        break;
    case 'C':
        console.log("You got a C, there's room for improvement and here's a candy for you.");
        break;
    case 'D':
        console.log("You got a D, no reward for you.");
        break;
    case 'F':
        console.log("You got an F, better luck next time.");
        break;
    default:
        console.log("Invalid grade level.");
}
