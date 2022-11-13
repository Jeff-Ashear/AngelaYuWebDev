// instructor's example:

var loveScore = Math.random() * 100
loveScore = Math.floor(loveScore) + 1

if (loveScore > 70) {
    console.log("Your love score is " + loveScore + "%.  You love each other like Kanye loves Ye")
} else if (loveScore > 30 && loveScore <= 70) {
    console.log("Your love score is " + loveScore + "%.")
} else {
    console.log("Your love score is " + loveScore + "%.  Sorry.  You're going to be lonely.")
}