console.log("You will live in a " + getHome() + " and travel to " + getTravelCount() + " countries, and have a pet " + getPet() + "! Your occupation will be working as a " + getOccupation() + " and you will " + getASCcomplete() + " complete All Star Code!");
function randNumGenerator(num1){

    let randDecimal = Math.random();
    let randNum = randDecimal * num1;
    let randInt = Math.floor(randNum);
    return randInt
}

function getHome(){
    
    let living=['Mansion', 'Castle', 'Shack', 'House'];
    let choiceLiving = process.argv[2];
    if (choiceLiving == "undefined")
        return living[randNumGenerator(living.length)];
    else
        living.push(choiceLiving);
        return living[randNumGenerator(living.length)];
}

function getTravelCount(){

    return randNumGenerator(101)
}

function getPet(){

    let randomPets = ['cat', 'dog', 'lion', 'penguin', 'otter', 'fish'];
    let choicePet = process.argv[3];
    let coinflip = randNumGenerator(2);
    if (choicePet == "undefined" ) 
         return randomPets[randNumGenerator(randomPets.length)];
    else
        if (coinflip == 1)
            return randomPets[randNumGenerator(randomPets.length)];
        else
            return choicePet;
}

function getOccupation(){

    let jobs=['actor', 'programmer', 'banker', 'accountant', 'chef'];
    let choiceJob = process.argv[4];
    if (choiceJob == "undefined")
         return jobs[randNumGenerator(jobs.length)];
    else
         jobs.push(choiceJob);
         return jobs[randNumGenerator(jobs.length)];
}

function getASCcomplete(){

    let result=['probably', 'not', 'might', 'maybe'];
    let choiceResult = process.argv[5];
    if (choiceResult == "undefined")
         return result[randNumGenerator(result.length)];
    else
         result.push(choiceResult);
         return result[randNumGenerator(result.length)];    
}