// Part 2

let scores = [85, 93, 65, 65, 92, 81, 93];
let length = scores.length+1;
let sum = (scores[0] + scores[1] + scores[2] + scores[3] + scores[4] + scores[5] + scores[6]);
console.log(sum);
console.log("Average:", sum/length);

// Part 3

let myArray = ['a', 'b', 'c', 'd'];
console.log("Before:", myArray);
myArray.reverse()
console.log("After:",myArray);

let myArray1 = ['a', 'b', 'c', 'd'];
console.log("Before:", myArray1);
myArray1.push(1,2);
console.log("After:",myArray1);

let myArray2 = ['a', 'b', 'c', 'd'];
console.log("Before:", myArray2);
myArray2.pop()
console.log("After:",myArray2);

let myArray3 = ['a', 'b', 'c', 'd'];
console.log("Before:", myArray3);
myArray3.pop();
myArray3.push("e");
console.log("After:",myArray3);

let myArray4 = ['a', 'b', 'c', 'd'];
console.log("Before:", myArray4);
myArray4.pop()
myArray4.push("e","f");
myArray4.reverse();
console.log("After:",myArray4);