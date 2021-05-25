


const men = ["plato", "socrates", "aristotle", "pythagoras", "homer"];

const pName = "socrates";

console.log(mortalOrNot(pName));
console.log(mortalOrNot("Medusa"));

function mortalOrNot(myName){
    return men.includes(myName);
}


const cakePossibilities = ["vanilla", "chocolate"];

function flavour(cakesArray, choc){
    if(choc){
        return cakesArray[1];
    }
    else{
        return cakesArray[0];
    }
}

console.log(flavour(cakePossibilities, true));
console.log(flavour(cakePossibilities, false));

