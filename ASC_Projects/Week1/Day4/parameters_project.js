//Part 1

function evenorOdd(number){

    console.log("Your number is:", number);

    if(number%2 == 0)
        console.log("Your number is even");
    
    else if(number%2 == 1) 
        console.log("Your number is odd");

    console.log("");
    
}


//Part 2

function divisor(number, divider){

    if(number%divider == 0)
        console.log(number + " is divisible by " + divider);

    else
        console.log(number + " is not divisible by " + divider);

}


//Part 3

function distanceCalculator(name1, x1, y1, name2, x2, y2){

    let distance = (((x2-x1)**2)+((y2-y1)**2))**.5;
    console.log(name1 + " and " + name2 + " are " + distance + " meters(s) apart");

}

distanceCalculator("Michael", 3.28, 2.26, "Anthony", 3.92, 3);
distanceCalculator("you", 0, 0, "I", 0, 0);

