// Code your solution here

// with explicit function declaration
// function findMatching(drivers, str) {
//   return drivers.filter(function(driver){
//     return driver.toLowerCase() === str.toLowerCase()
//   })
// }

// with arrow function
function findMatching(drivers, str) {
  return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase()
  )  
}

function fuzzyMatch(drivers, str) {
  return drivers.filter(driver => driver.startsWith(str))
}

function matchName(drivers, str) {
  return drivers.filter(driver => driver.name === str)
}