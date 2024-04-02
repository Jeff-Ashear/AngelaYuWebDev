function fibogen(n) {
    let output = []
    let sum = 0
    
    if (n <= 1) {
        ouput = [0]
    } else if (n === 2) {
        output = [0,1]
    } else {
        output = [0, 1]
        for (let i = 1; i < n; ++i) {
            output.push(output[i] + output[i - 1])
        }
        // sum = output[i] + output[i - 1]
    }
    return output
}


console.log(fibogen(2))
console.log(fibogen(5))