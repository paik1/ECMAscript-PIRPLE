let men = {
    plato  : {
        mortality : "mortal",
    },
    socrates  : {
        mortality : "mortal",
    },
    aristotle  : {
        mortality : "mortal",
    },
    pythagoras : {
        mortality : "mortal",
    },
};



if(men.socrates){
    if(men.socrates.mortality) {
        console.log("Socrates is "+men.socrates.mortality);
    }
}

let cake = {
    flavour : "vanilla"
};

if(cake){
    if(!(cake.flavour === "chocolate")){
        console.log("It is Vanilla flavoured");
    }
}


