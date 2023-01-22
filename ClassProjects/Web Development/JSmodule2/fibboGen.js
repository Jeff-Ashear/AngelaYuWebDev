let output = []

function fibboGen(n) {
    let firstNum = 0
    let secondNum = 1
    let sum = 0

    if (n <= 1) {
        output.push(firstNum)
    } else if (n === 2) {
        output.push(firstNum, secondNum)
    } else {
        output.push(firstNum, secondNum)
        
        for (var i = 0; i < n - 2; ++i) {
            sum = firstNum + secondNum
            output.push(sum)
            firstNum = secondNum
            secondNum = sum
        }
    }

    return output
}

console.log(fibboGen(15))