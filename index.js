// Code your solution here
const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh' },
    {
        name: 'Sammy',
        hometown: 'New York' } ,
    {
        name: 'Sally',
        hometown: 'Cleveland' },
    {
        name: 'Annette',
        hometown: 'Los Angeles' },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay' }
];

const findMatching = (drivers, name) => {
    const newDrivers = drivers.filter(driver => {
        return driver.toLowerCase() == name.toLowerCase()
    })

    return newDrivers
}

const fuzzyMatch = (drivers, letters) => {
    const newDrivers = drivers.filter(driver => {
        return driver.startsWith(letters)
    })

    return newDrivers
}

const matchName = (drivers, name) => {
    const newDrivers = drivers.filter(driver => {
        return driver['name'].toLowerCase() == name.toLowerCase()
    })

    return newDrivers
}