let bottles = 99

function numOnWall(num) {
    let bottleWord = "bottles"

    while (bottles >= 0) {        
            console.log(bottles + " " + bottleWord + " of beer on the wall. " + bottles + " " + bottleWord + " of beer.")
            bottles-- 
            if (bottles === 1) {
                bottleWord = "bottle"
            }
            if (bottles === 0) {
                bottleWord = "bottles"
                console.log("Go to the store. Buy some more. 99 bottles of beer on the wall.")
            }
            console.log("Take one down. Pass it around. " + bottles + " " + bottleWord + " of beet on the wall.")
    }

}

numOnWall(bottles)