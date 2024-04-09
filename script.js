function exampleStuff() {
    
let exampleEmptyVariable = null;
let anotherEmptyVariable = undefined;

console.log(exampleEmptyVariable, anotherEmptyVariable);
 
let message = "hello from the script.js file!";

console.log(message);

// no keyword = declared with var
// world = "Earth";

// console.log(`Hello ${world}, I am Zeke!`);

// console.log ("Hello " + world + ", I am Zeke!");

// let world = "mars";

// console.log(`Hello ${world}, I am Zeke!`);


// {

//     // let world = "Mars";
    
//     console.log(`Hello ${world}, I am Zeke!`);

// }




// list in python is array in JS

let favouriteFruits = [

    "mango",
    "banana",
    "grapes",
    "passionfruit",
    "pear",
    "strawberry",
    "watermelon",
    "lychee",
    "cherry",
    "blueberry",
    "tomato",
    "papaya",
    "dragon fruit",
    "kiwi"
];

console.log(favouriteFruits[12]);

console.log("The class' favourite fruits are: " + favouriteFruits);

favouriteFruits.forEach(fruit => {
    console.log("someone in the class loves" + fruit);

});

for (fruitindex in favouriteFruits){
    console.log("someone in the class loves " + favouriteFruits[fruitindex]);
}

console.log(Array.isArray(favouriteFruits));

let sortedFavouriteFruits = favouriteFruits.sort();

console.log(sortedFavouriteFruits);

let someNewArray = new Array(10);

someNewArray.push("mango");

console.log(someNewArray);












// dictionary in python is object in JS

let zeke = {
    name: "zeke",
    codingLanguages: [ "C#", "JavaScript", "HTML", "CSS"],
    hobbies: [
        {
            "name": "gardening",
            "skill": 10,
        },
        {
            "name": "gaming",
            "favouriteGames": ["pokemon", "halo"],
            "skill": 9001,
        }
    ],
};

zeke.hobbies[1]["favouriteGames"][0] = "digimon";

zeke.hobbies[1]["favouriteGames"][0] = "palworld";

console.log(zeke);



/**
 * Description placeholder
 * @date 07/04/2024 - 19:27:08
 *
 * @type {string}
 */

let weather = "rainy";

switch (weather) {
    case "sunny":
        console.log("sunny weather is nice when it's not hot!");
        break;
    case "rainy":
        console.log("rain is nice when it's not torrential");
   
    case "hail":
        console.log("man, that hail was wild");
        // break;
    case "storm":
    case "snowy":
    default:
        console.log("crazy weather, am I right?");
        break;

}

if (weather == "sunny") {
    
    console.log("sunny weather is nice when it's not hot!");

} else if (weather == "rainy") {

    console.log("rain is nice when it's not torrential");

} else {
    
    console.log("crazy weather, am I right?");
}
    



}

let pokemonTeam = [
    "pikachu",
    "squirtle",
    "charmander",
    "mew",
];

function logTheTeam () {
    sortedTeam = pokemonTeam.sort();

    // sortedTeam.forEach((pokemon, arrayIndex) => {
    //     console.log(pokemon + " is at index of " + arrayIndex);
    // });

    // console.log(pokemonTeam.entries());

    // for (const [index, pokemon] of sortedTeam.entries()) {
    //     console.log(`${pokemon} is at index of ${index}`);
        
    // }

    let [firstPokemon, ...otherPokemon] = sortedTeam;

    console.log(firstPokemon);
    console.log(otherPokemon);

    // while (true){
    //     console.log("infinite loop");
    // }

    // while (sortedTeam.length){
    //     console.log(sortedTeam.pop());
    // }

    do {
        console.log(sortedTeam.pop());
    } while (sortedTeam.length);

    sortedTeam.push('blastoise');

    for (let index = 0; index < sortedTeam.length; index++) {
        console.log("Pokemon at index " + index + " is " + sortedTeam[index]);
       
        
    }


    // for (const pokemon of sortedTeam) {
    //     console.log(pokemon);
        
    // }
}


// logTheTeam();

const logTheTeamAlternate = (targetSize = 4) => {
    // double equals is checking for value
    // type coercion happens where possible automatically
    if (pokemonTeam.length == targetSize){
        console.log("there are " + targetSize + " pokemon in the team");
    }

    // triple equals is checking for value AND data type
    if (pokemonTeam.length === targetSize){
        console.log("there are " + targetSize + " pokemon in the team, this is from the strict equals comparison");

    }
    
}

logTheTeamAlternate();
logTheTeamAlternate(2);


var smellStrength

function someSmellyFunction(){
    smellStrength = 1;

    let smellTotalStrength = (baseStrength, multiplier) => {
        return baseStrength = multiplier;
    }

    return smellTotalStrength(smellStrength, 10);
    // equivalent to:
    // return 100;

}

// console.log(smellStrength);
// console.log(someSmellyFunction());
// console.log(smellStrength);

let person = {
    name: "Alex",
    greeting: (message) => {
        console.log("Hello! I have a message for you");
        console.log(message);

    },

    farewell: function (message){

        console.log("Bye bye! Here are some parting words: ");
        console.log(message);
    },

    dance: (dance) => {
        console.log("I'm gonna dance!");
        // this.dance() is for JS classes, not objects
        // recursive function, do not call
        // it can crash your browser!
        person.dance()
    },
    listFavouritePokemon: (pokemonList, formatFunction) => {
        console.log("Hi! I have some favourite Pokemon to share. They are: ");
        formatFunction(pokemonList);
    }
}

function improvedTeamLogging(pokemonTeam){
    let sortedReversedTeam = pokemonTeam.sort().reverse();

    sortedReversedTeam.forEach(pokemonName => {
        console.log(pokemonName);

    });
}


person.listFavouritePokemon(["pikachu", "blastoise"], improvedTeamLogging);

person.listFavouritePokemon(
    ["pikachu", "blastoise"],
     improvedTeamLogging
     
     
);




// person.greeting("message");
// person.farewell("message");

// person.dance();
