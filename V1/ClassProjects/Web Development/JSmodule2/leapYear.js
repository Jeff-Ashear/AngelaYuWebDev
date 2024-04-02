function isLeapYear(year) {
    let leapYear = false

    if (year % 4 === 0) {
       leapYear = true 
    }

    if (year % 4 === 0 && year % 100 === 0) {
        leapYear = false
    }
    if (year %4 === 0 && year % 100 === 0 && year % 400 === 0) {
        leapYear = true
    }
    if (leapYear == true) {
        return year + " is a leap year."
    } else {
        return year + " is not a leap year."
    }
}

console.log(isLeapYear(2019))
console.log(isLeapYear(2100))
console.log(isLeapYear(2010))
console.log(isLeapYear(2000))
