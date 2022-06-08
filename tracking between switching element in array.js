const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let N
let count = 0
let target = 1

rl.on("line", line => {
    if (count === 0) {
        N = line;
        count += 1
    } else {
        const [ a, b ] = line.split(" ").map(el => parseInt(el))
        if ( a === target ) {
            target = b
        } else if ( b === target) {
            target = a
        }
        count += 1
    }
    if (count > N) {
        rl.close()
    }
})

rl.on("close", () => {
    console.log(target)
    process.exit();
})
