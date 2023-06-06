function sumTwo(num1, num2) {
	//Your code here

	let sum = num1 + num2;
	return sum;

}


function arrAdder(myArray) {
	//Your code here

	let sum = 0;

	for(let i=0; i<myArray.length; i++){

		sum=sum + myArray[i];
		
	}
	return sum;
}


function charsRemover(str, charArr) {
	//Your code here

	str.replace(charArr);
	return str

}
charsRemover('a-b-c',['-']) // -> 'abc'
charsRemover('a-b/c-d', ['-', '/']) // -> 'abcd'
charsRemover('abc', ['a', 'b', 'c']) // -> ''

console.log()