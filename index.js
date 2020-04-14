
function dwarfRollCall(dwarves) {
  var array = []; 
  for (let i = 0; i < dwarves.length; i++) {
    array.push(`${(parseInt([i]) + 1)}. ${dwarves[i]}`)
  }
  return array.join(' ') + " "
}

/* function dwarfRollCall(dwarves) {
  var array = []; 
  for (let i = 0; i < dwarves.length; i++) {
    array.push(`${(parseInt([i]) + 1)}. ${dwarves[i]}`)
  }
  let sum = array[0]
  for (let i = 1; i < array.length; i++) {
    sum += (" " + array[i])
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
let cheese = ["cheddar", "gouda", "camembert"];
let array = []
while (foods || foods === 0) {
if (cheese.includes(foods)) {
return foods
}
if (Array.isArray(foods)) {
for (let i = 0; i < foods.length; i++) {
array.push(foods[i])
}
}
foods = array.shift()
}
return "no cheese!"
}









