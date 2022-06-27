function solution(numbers, hand) {
    let l = 12;
    let r = 12;
    let answer = []
    numbers.map(el => {
        if ( el == 1 || el == 4 || el == 7) {
            answer.push("L")
            l = el + 2
        } else if ( el == 2 || el == 5 || el == 8) {
            const l_dist = 
                  (l == 2 || l == 5 || l == 8 || l == 11) 
                    ? Math.abs(el-l) / 3 
                    : parseInt((Math.abs(el-l)+1) / 3) + 1
            const r_dist = 
                  (r == 2 || r == 5 || r == 8 || r == 11) 
                    ? Math.abs(el-r) / 3 
                    : parseInt((Math.abs(el-r)+1) / 3) + 1\
            if (l_dist == r_dist) {
                if (hand == "left") {
                    answer.push("L")
                    l = el
                } else {
                    answer.push("R")
                    r = el
                }
            } else if (l_dist > r_dist) {
                answer.push("R")
                r = el
            } else {
                answer.push("L")
                l = el
            }
        } else if ( el == 0 ) {
            const l_dist = (l == 2 || l == 5 || l == 8 || l == 11) 
                    ? Math.abs(11-l) / 3 
                    : Math.abs(15-l) / 3
            const r_dist = (r == 2 || r == 5 || r == 8 || r == 11) 
                    ? Math.abs(11-r) / 3 
                    : Math.abs(15-r) / 3
            if (l_dist == r_dist) {
                if (hand == "left") {
                    answer.push("L")
                    l = 11
                } else {
                    answer.push("R")
                    r = 11
                }
            } else if (l_dist > r_dist) {
                answer.push("R")
                r = 11
            } else {
                answer.push("L")
                l = 11
            }
        } else if ( el == 3 || el == 6 || el == 9) {
            answer.push("R")
            r = el
        }
    })
    return answer.join("")
}

// 반성
// 1. 출제 의도를 잘 모르겠음. other solution을 보니 인접리스트, 그리드 등 여러 자료구조를 활용했던데, 난 모르겠기도 하거니와 굳이 싶었음.
// 2. 코드를 단순화해보자. 거리 계산하는 함수 생성하고 중복되는 조건문을 제거해보자.
