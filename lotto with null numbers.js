function solution(lottos, win_nums) {
    var answer = [];
    let maxWin = 0
    let minWin = 0
    for (let i = 0; i<lottos.length; i++) {
        if (lottos[i] ==0) {
            maxWin += 1
        } else {
            filtered = win_nums.filter(el => el === lottos[i])
            maxWin += filtered.length
            minWin += filtered.length
        }
    }
    answer.push(maxWin == 0 ? 6 : 7 - maxWin)
    answer.push(minWin == 0 ? 6 : 7 - minWin)
    return answer;
}

// other solution 1
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}

// 반성
// 1. 0값이 false로 여겨짐을 고려해서 filter를 적용해보기. filter는 ture or false를 따지는 메서드임을 기억하면 유용하게 활용할 수 있을 것
// 2. 삼항연산자는 만능이 아님. 긴 if문을 줄여줄 순 있으나 더 간단한 코딩이 있음에도 코드가 길어질 수 있음. 
// 따라서 삼항연산자를 쓰겠다 생각하고 접근하지 말고, 조건문으로 들이댄 후에 조건문이 길면 삼항연산자로 줄여보자는 생각 하기.
// 3. rank 처리가 딱 맞아떨어지지 않을 때, index를 활용해보기. index는 딱 맞아 떨어지기 때문.


// other solution 2
function solution(lottos, win_nums) {
    const answer = [];
    const min = lottos.filter(n => win_nums.includes(n)).length;
    const max = lottos.filter(n => n === 0).length + min;

    max > 1 ? answer.push(7 - max) : answer.push(6);
    min > 1 ? answer.push(7 - min) : answer.push(6);

    return answer;
}
// 반성
// 1. 완전 같은 로직이나 코드를 줄일 수 이는 걸 줄이지 않았음. 
// 2. filter의 length가 어차피 숫자이니, 변수값을 0으로 설정해놓고 length를 더할 필요 없음.
