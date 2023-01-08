let bottlesNum = 99
let bottleSSSS = "s"
let line1 = ""
let line2 = ""

function lyrics() {

    while (bottlesNum > 1) {
        console.log(bottlesNum + " bottles of beer on the wall.  " + bottlesNum + " bottles of beer.")
        bottlesNum--
        console.log("Take one down, pass it around.  " + bottlesNum + " bottles of beer on the wall.")
    }

}