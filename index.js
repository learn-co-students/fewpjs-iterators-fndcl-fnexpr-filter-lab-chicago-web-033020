// Code your solution here
function findMatching(drivers, string) {
    const result = drivers.filter(element => element.toLowerCase() === string.toLowerCase());
    return result;
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(element => element.charAt(0) === string.charAt(0));
    return result;
}

function matchName(drivers, string) {
    const result = drivers.filter(element => element.name === string)
    return result;
}