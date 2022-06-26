function solution(new_id) {
    let first = new_id.toLowerCase()
    
    const second_reg = /[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/]/g;
    const second = first.replace(second_reg, "")
    const third = second.replace(/[.]+([?=.])/g, ".") // 이해 안 됨.
    
    let array = Array.from(third)

    if (array[0] === ".") {
        array = array.slice(1)
    }  
    if (array[array.length-1] === ".") {
        array.pop()
    }
    
    if (array.length == 0) {
        array.push("a")
    }
    if (array.length >= 16) {
        array = array.slice(0, 15)
    }
    
    if (array[array.length-1] === ".") {
        array = array.slice(0, -1)
    }
    while (array.length < 3) {
        const last = array[array.length-1]
        array.push(last)
    }
    const answer = array.join("")
    return answer;
}
