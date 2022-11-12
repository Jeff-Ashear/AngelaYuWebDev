function loveCalc() {
    let num = Math.floor(Math.random()* 100 ) + 1
    let message = "You "
    if (num > 70) {
        message += "are destined for everlasting love."
    } else {
        message += "have a " + num + "% chance to fall in love."
    }
    
    return message
}

console.log(loveCalc())