// Code your solution here
function findMatching(drivers, driver){
  let result = drivers.filter( d => d.toLowerCase() === driver.toLowerCase())
  return result
}

function fuzzyMatch(drivers, driver){
  let result = drivers.filter( d => d.charAt(0).toLowerCase() === driver.charAt(0).toLowerCase())
  return result
}

function matchName(drivers, driver){
  let result = drivers.filter( d => d.name.toLowerCase() === driver.toLowerCase())
  return result
}