// We will be covering arrays and objects in Javascripy.
const students = [
    "Annmarie",
    "Norah",
    "Lee",
    "Joel"
]

// console.log(students[0])
// console.log(students[3])
// console.log(students[4])

const eplTable = {
    manUtd: 89,
    arsenal:87,
    manCity: 86,
    chelsea:59,
    leeds:30
}

console.log(eplTable.manUtd);

// Nesting of collections in JS.
const eplSummary = {
    manUnited : {
        points: 89,
        manager: "Erik Ten Haag",
        starPlayers: ["Marcus Rashford", "Alejandro Garnacho", "Mason Greenwood"],
        newSignings: ["Mason Mount", "Andre Onana"]
    },
    arsenal:{
        points: 88,
        manager: "Mikel Arteta",
        starPlayers: ["Bukayo Saka", "Gabriel Martinelli", "Gabriel Jesus"],
        newSignings: {
            defender: "Jurrien Timber",
            midfielder: "Declan Rice"
        }
    }
}

console.log(eplSummary.manUnited.points)
console.log(`My favorite team is Arsenal. In the 22-23 season, we managed to garner ${eplSummary.arsenal.points} points with our super manager ${eplSummary.arsenal.manager} being at the driving seat. We aim to beat our rivals this coming campaign, and we will be relying on our star players, including ${eplSummary.arsenal.starPlayers[0]}, ${eplSummary.arsenal.starPlayers[1]} and ${eplSummary.arsenal.starPlayers[2]} to lead the charge. To reinforce our squad, we have fresh additions both in defence and midfield, with ${eplSummary.arsenal.newSignings.defender} and ${eplSummary.arsenal.newSignings.midfielder}. Catch us if you can!`)

// Adding elements to an array
const superheroes = ["Batman", "Superman", "Thanos"];

superheroes.push("Hulk");

console.log(superheroes);

const cities = ["New York", "New Jersey", "Washington"];
cities.unshift("Boston", "Chicago");

console.log(cities)

const mystudents = ["Lee", "Danson", "Nathan", "Jeff", "Norah", "Fiona", "Emma"];
mystudents.unshift("Shirley", "Caspian");
console.log(mystudents);

mystudents.push("Dan Martins");
console.log(mystudents);

const copyOfCoolCities = [...cities, "Nairobi"];
console.log(copyOfCoolCities)

const myCoolFriends = ["Joel", ...students];
console.log(myCoolFriends);


// Removing elements from an array
mystudents.shift();
console.log(mystudents);

mystudents.pop();
console.log(mystudents);

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// days.pop();
// days.shift();

// console.log(days);

const daysSliced = days.slice(0, days.length-1);
console.log(daysSliced);

const cards = [
    "Ace of Spades",
    "Jack of Clubs",
    "Nine of Clubs",
    "Nine of Diamonds",
    "Three of Hearts",
];

cards.splice(2,1,"Ace of Clubs");

console.log(cards);

const menu = [
    "Jalapeno Poppers",
    "Cheeseburger",
    "Fish and Chips",
    "French Fries",
    "Onion Rings",
];
// menu.splice(1, 2, "Veggie Burger", "House Salad", "Teriyaki Tofu");

// console.log(menu);

const newMenu = [
    ...menu.slice(1,2),
    "Veggie Burger",
    "House Salad",
    "Teriyaki Tofu",
    ...menu.slice(3),
];

console.log(newMenu);