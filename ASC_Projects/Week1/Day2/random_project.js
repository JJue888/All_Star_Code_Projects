// Part 1

let randDecimal = Math.random();
let randNum = randDecimal * 11;
let randInt = Math.floor(randNum);
let Rand1 = randInt;

let randDecimal2 = Math.random();
let randNum2 = randDecimal2 * 11;
let randInt2 = Math.floor(randNum2);
let Rand2 = randInt2;

let sum = Rand1 + Rand2;

console.log("Random Number #1:", Rand1);
console.log("Random Number #2:", Rand2);
console.log("Sum:", sum);


//Part 2

let days = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae'];
let reactions = ['Yay!', 'Ahhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];

let randDecimal3 = Math.random();
let randNum3 = randDecimal3 * days.length;
let day = Math.floor(randNum3);

let randDecimal4 = Math.random();
let randNum4 = randDecimal4 * reactions.length;
let reaction = Math.floor(randNum4);

console.log("Your lucky day:", days[day]);
console.log(reactions[reaction]);