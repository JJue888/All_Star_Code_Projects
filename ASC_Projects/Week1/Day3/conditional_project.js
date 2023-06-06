// Part 1
// @#%
// @
//@^
//10 
//N/A

// Part 2

let userInput = process.argv[2];
let randDecimal = Math.random();
let randNum = randDecimal * 101;
let randInt = Math.floor(randNum);
let Rand = randInt;

console.log("Your Guess:", userInput);
console.log("Random number generated:", Rand);
console.log("");

if (userInput == Rand){

    console.log("YOU GUESSED RIGHT!");

}

else if (userInput > Rand){

    console.log("your guess is TOO HIGH");

}

else if (userInput < Rand){

    console.log("your guess is TOO LOW");

}