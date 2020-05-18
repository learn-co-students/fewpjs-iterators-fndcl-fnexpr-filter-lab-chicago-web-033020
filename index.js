// Code your solution here


  
function findMatching(driver, string){
  return driver.filter(driverX => 
    driverX.toLowerCase() === string.toLowerCase()
  )
  
}

function fuzzyMatch(driver, string){
  return driver.filter(driverX =>
    driverX.toLowerCase()[0] === string.toLowerCase()[0] )
}

function matchName(driver, string){
  return driver.filter(driverX =>
    driverX.name === string)
}