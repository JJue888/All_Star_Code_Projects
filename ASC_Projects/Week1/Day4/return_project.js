//Part 1

function combineStrings(string1, string2){

    let combo =  string1+string2;
    return combo;

}

//Part 3

function checkAnswer(num1, num2, opp, answer){

    let opp1 = opp.replace('"','');
    if(num1,opp1,num2 == answer)
        return true;
    
    else
        return false;


}

let b1 = checkAnswer(3, 5, "+", 8);
let b2 = checkAnswer(9, 8, "+", 15);
let b3 = checkAnswer(5, 4, "-", 1);
let b4 = checkAnswer(0, 1, "-", -2);
 
console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);