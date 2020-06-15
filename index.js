
function dwarfRollCall(dwarves) {
  var array = []; 
  for (let i = 0; i < dwarves.length; i++) {
    array.push(`${(parseInt([i]) + 1)}. ${dwarves[i]}`)
  }
  return array.splice(dwarves.length/2, dwarves.length).join(' ') 
}

/* Second Method

function dwarfRollCall(dwarves) {
  var array = []; 
  for (let i = 0; i < dwarves.length; i++) {
    array.push(`${(parseInt([i]) + 1)}. ${dwarves[i]}`)
  }
  let sum = array[0]
  for (let j = 1; j < array.length; j++) {
    sum += (" " + array[j])
  }
  return sum + " "
} */

function summonCaptainPlanet(planeteerCalls){
var array = [];
for (let i = 0; i < planeteerCalls.length; i++) {
array.push(`${planeteerCalls[i].toUpperCase()}!`)
}
return array 
}

function longPlaneteerCalls(words) {
for (let i = 0; i < words.length; i++) {
  if(words[i].length > 4) {
    return true 
  } else {
    return false
  }
}
}


function findTheCheese(foods) {
let cheese = ["cheddar", "gouda", "thyme",];
for (let i = 0; i < cheese.length; i++) {
  if (foods.includes(cheese[i])) {
    return cheese[i]
  }
}
return "no cheese!"
}

// function startsWithB(words) {
//   let array = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i][0] === "b") {
//       array.push(words[i][0])
//     }
// } return array
// }



/* second method

function findTheCheese(foods) {
let cheese = ["cheddar", "gouda", "camembert"];
for (let i = 0; i < foods.length; i++) {
for (let a = 0; a < cheese.length; a++) {
if (foods[i] === cheese[a]) {
return foods[i]
}
}
}
return "no cheese!"
}*/







