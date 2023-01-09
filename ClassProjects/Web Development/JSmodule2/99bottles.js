let bottlesNum = 99
let bottles = "bottles"
let line1 = ""
let line2 = ""

function lyrics() {

    function checkTheS(num) {
        if (bottlesNum != 1) {
            bottles = "bottles"
        } else {
            bottles = "bottle"
        }
    }

    while (bottlesNum >= 1) {
        checkTheS(bottlesNum)
        console.log(bottlesNum + " " + bottles + " of beer on the wall.  " + bottlesNum + " " + bottles + " of beer.")
        bottlesNum--
        checkTheS(bottlesNum)
        console.log("Take one down, pass it around.  " + bottlesNum + " " + bottles + " of beer on the wall.")
   
    }
}

lyrics(bottlesNum)