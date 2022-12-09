let arr = [];

function fizzBuzz(arr) {
    if (arr.length === 0) {
        let i = 1
        while (i < 101) {
            if (i % 3 === 0 && i % 5 === 0) {
                arr.push("Fizzbuzz")
            } else if (i % 3 === 0) {
                arr.push("Fizz") 
            } else if (i % 5 === 0) {
                arr.push("Buzz")
            } else {
                arr.push(i)
            }
            i++
        }
    }
    return arr
}

console.log(fizzBuzz(arr))
