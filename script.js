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
    

