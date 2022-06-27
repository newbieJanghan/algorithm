function solution(participant, completion) {
    var answer = '';
    const completed = new Object()
    completion.forEach(el => {
        completed[el] = completed[el] + 1 || 1
    })
    participant.forEach(el => {
        if (completed[el] > 0) {
            completed[el] -= 1
        } else {
            answer += el
        }
    })
    return answer;
}

// 반성
// 1. 입력 값 크기를 고려해 sorting을 제외하려는 사고 굿
// 2. 입력 값의 횟수를 고려한 점은 아래의 고수 솔루션과 같은 로직 굿

// other solution
var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))
