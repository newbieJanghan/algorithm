function solution(s) {
    const number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]

    const result = s
        .replace(/one/gi, "1")
        .replace(/two/gi, "2")
        .replace(/three/gi, "3")
        .replace(/four/gi, "4")
        .replace(/five/gi, "5")
        .replace(/six/gi, "6")
        .replace(/seven/gi, "7")
        .replace(/eight/gi, "8")
        .replace(/nine/gi, "9")
        .replace(/zero/gi, "0")
    return answer = Number(result)
}

//other solution 1
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

// other solution 2
const digit2word = ['zero','one','two','three','four','five','six','seven', 'eight','nine']
function solution(s) {
    return Number(digit2word.reduce((ans, word, digit) => ans.replace(new RegExp(word, 'g'), digit), s));
}

// 반성
// 1. 입력된 문자열에 조작이 이루어지는 메서드를 사용할 땐 그 결과값을 새로운 변수에 저장해야 함.
// 2. split을 떠올리긴 했는데, split의 결과값이 무엇인지까지 생각해보려고 하지 않았음. 왜 그랬는지는 모르겠다.
// 3. reduce가 어떤 인자를 다루는지 몰랐음. 
// 처음에 map이 index를 다루는걸 떠올려서 적용해보려다가 잘 안 되었는데, 
// redcue도 index를 활용함을 이제 알았으니 나중에 떠오르면 깊게 파고들어보자.
