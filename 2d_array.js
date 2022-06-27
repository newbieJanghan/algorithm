function solution(board, moves) {
    var answer = 0;
    const stack = []
    moves.forEach(el => {
        for (let i=0 ; i<board.length; i++) {
            const picked = board[i][el-1]
            if (picked != 0) {
                const len = stack.length
                if (len > 0 && stack[len-1] == picked) {
                    stack.pop()
                    answer += 2
                } else {
                    stack.push(picked)
                }        
                board[i][el-1] = 0
                break
            }
        }
    })
    return answer
}

// 반성
// 1. 2차원 배열 개념을 몰라 좌표 체계를 이해하지 못했음. 일반적으로 왼쪽 위가 array[0][0]이라고 생각해보자.
// 2. 이외에 stack 개념을 차용해서 pop하고 2씩 count한건 좋았음.

// other solution ; matrix to stack
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};
