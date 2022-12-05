let arrAuto = [];

// produces and returns an array of numbers in order from 1 to 100
function populator(arr) {
    for (let i = 0; i < 100; i++) {
        arrAuto.push(i + 1)
    }
    return arrAuto
}

// (populator(arrAuto))

// scans the above array for:
    // mulitples of 3 and 5, and then prints "FizzBuzz"
    // multiples of 5, and then prints "Buzz"
    // multiples of 3, and then prints "Fizz"
    // in cases not meeting the condintions above the number itself is printed
    
function fizzBuzz(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            console.log("FizzBuzz")
        } else if (arr[i] % 5 === 0) {
            console.log("Buzz")
        } else if (arr[i] % 3 === 0) {
            console.log("Fizz")
        } else {
            console.log(arr[i])
        }
    }
}

// fizzBuzz(arrAuto)

let arrManual = []

function Bizzfuzz() {
    if (arrManual == false) {
        arrManual.push(1)
    }

     var num = arrManual.pop()

     arrManual.push(num)
     arrManual.push(num + 1)

    console.log(arr)
    return arrManual
}

// Bizzfuzz(arrManual)

var output = []
let count = 1

function fizzBuzz() {
    if (count % 3 ===0 && count % 5 === 0) {
        output.push("FIzzBuzz")
    } else if (count % 3 === 0) {
        output.push("Fizz")
    } else if (count % 5 === 0) {
        output.push("Buzz:")
    } else {
        output.push(count)
    }
    count++
    
    return output 
}