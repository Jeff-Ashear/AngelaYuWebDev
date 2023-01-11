let bottlesNum = 99
let bottleWord = "bottles"
let line1 = ""
let line2 = ""

function lyrics() {

    function checkTheS(num) {
        if (bottlesNum != 1) {
            bottleWord = "bottles"
        } else {
            bottleWord = "bottle"
        }        
    }

    while (bottlesNum >= 1) {
        checkTheS(bottlesNum)
        console.log(bottlesNum + " " + bottleWord + " of beer on the wall.  " + bottlesNum + " " + bottleWord + " of beer.")
        bottlesNum--
        checkTheS(bottlesNum)
        console.log("Take one down, pass it around.  " + bottlesNum + " " + bottleWord + " of beer on the wall.")  
    }

    if (bottlesNum === 0) {
        console.log("No more bottles of beer on the wall.  No more bottles of beer.")
        return console.log("Go to the store.  Buy some more. 99 bottles of beer on the wall.")
    }


    
}

lyrics(bottlesNum)