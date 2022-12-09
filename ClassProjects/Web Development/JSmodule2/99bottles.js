let bottles = 99

function numOnWall(num) {
    let bottleWord = "bottles"

   while (bottles >= 0) {
    if (bottles = 1) {
        bottleWord = "bottle"
    } else {
        bottleWord = "bottles"
    }
    console.log(bottles + " " + bottleWord + " of beer on the wall," + bottles + " " + bottleWord + " of beer.")
    bottles--
    if (bottles > 0) {
        console.log("Take one down, pass it around.  " + bottles + " " + bottleWord + " of beer on the wall.")    
    } else if (bottles = 0) {
        console.log("Go to the store, buy some more.  99 " + bottleWord + " of beer on the wall.")
    }
} 
}

numOnWall(bottles)