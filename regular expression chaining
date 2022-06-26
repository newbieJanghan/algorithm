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

// other solution
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

// 반성
// 1. 정규표현식 개념 부족
// 2. 문자열 반복 repeat의 존재를 떠올리지 못함.
