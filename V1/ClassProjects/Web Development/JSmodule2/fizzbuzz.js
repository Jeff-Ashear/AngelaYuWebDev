let output = []
let count = 1

function fizzBuzz(arr, num) {

    while (num <= 100) {

        if (num % 3 === 0 && num % 5 === 0) {
            arr.push("FizzBuzz")
        } else if (num % 3 === 0) {
            arr.push("Fizz")
        } else if (num % 5 === 0) {
            arr.push("Buzz")
        } else {
            arr.push(num)
        }
        num++
    }
    
    return arr
}

console.log(fizzBuzz(output, count))