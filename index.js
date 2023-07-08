// We will be covering arrays and objects in Javascripy.
const students = [
    "Annmarie",
    "Norah",
    "Lee",
    "Joel"
]

console.log(students[0])
console.log(students[3])
console.log(students[4])

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