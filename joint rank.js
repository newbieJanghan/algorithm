const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let N
let count = 0
let input = []

rl.on("line", line => {
    if (count === 0) {
        N = line
        count += 1
    } else {
        const data = line.split(" ").map(el => parseInt(el))
        input.push(data)
        count += 1
    }
    if (count > N) {
    rl.close();
    }
})

rl.on("close", () => {
    const rank = input.map(el => {
        const compare = input.filter(ele => ele !== el)
        let bigger = 0
        for (let i = 0; i<compare.length; i++) {
            if(compare[i][0]>el[0] && compare[i][1]>el[1]) {
                bigger += 1
            }
        }
        return bigger+1
    })
    console.log(rank.join(" "))
    process.exit();
})
