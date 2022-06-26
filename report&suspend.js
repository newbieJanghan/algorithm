function solution(id_list, report, k) {
    const reportArr = [...new Set(report)]
    const reporteeMap = new Map()
    const reporterMap = new Map()
    
    reportArr.map(el => {
        const [reporter, reportee] = el.split(" ")
        reporteeMap.set(reportee, reporteeMap.get(reportee) + 1 || 1)
    })
    
    reportArr.map(el => {
        const [reporter, reportee] = el.split(" ")
        if (reporteeMap.get(reportee) >= k) {
            reporterMap.set(reporter, reporterMap.get(reporter) + 1 || 1)
        }
    })
    
    const answer = id_list.map(el => reporterMap.get(el) || 0)

    // 잘한 것: map, set를 활용한 점. 
    // 못한 점: 굳이 각 map의 배열에 id를 집어넣은 점. 중요치 않은 데이터를 굳이 다루려다가 test case에서 걸린듯
    // 조건에 따라 count를 추가하거나 내버려 둘 때, 복잡한 삼항연사자 대신 || 를 활용하자
    return answer;
}
// 반성
// 1. map의 value로 숫자 count만 넣으면 됐는데, 괜히 아이디 값을 넣어 복잡하게 만듦. 데이터를 간소화하자
// 2. 배열 순회의 결과값이 undefined가 예상되거나 특정 index의 값을 아예 다루지 않는다면 삼항연사자 대신 ||로 그 결과값을 세팅해주면 편하다
// 3. set의 장점은 중복값 제거 그 이상 그 이하도 아님. 특정 집합의 값을 순회할 때 무엇이 중요한지를 고민하고 array, set 중 하나를 고르자
//    Array.map은 element만 값으로 받는 반면 Set.forEach는 value, value2, set을 다루기 때문
