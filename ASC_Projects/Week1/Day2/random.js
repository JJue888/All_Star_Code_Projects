// End Goal: Generate random numbers between 0-4 (inclusive)

// 0 - .9999
let randDecimal = Math.random();
console.log("RandDecimal:", randDecimal);

// 0 - 4.9999
let randnum = randDecimal * 5;
console.log("RandNum0:", randnum);

// 0 - 4
let randInt = Math.floor(randnum);
console.log("randomInt:", randInt);

//floor round down ceiling round up