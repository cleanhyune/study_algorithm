function solve(length) {

    let result = 0
    let resultTime = []
    const defaultSegments = new Map([
        [0, 6],
        [1, 2],
        [2, 5],
        [3, 5],
        [4, 4],
        [5, 5],
        [6, 6],
        [7, 3],
        [8, 7],
        [9, 6]
    ]) /* 기본 숫자별 각 불이 들어오는 개수 */

    const countSegmentByTime = (hour, min, sec) => {
        return [hour, min, sec].map(n => {
            var count = defaultSegments.get(n)
            if(count === undefined) {
                const tens = defaultSegments.get(Math.round(n / 10, 0))  // 10의 자리 숫자의 불 개수
                const units = defaultSegments.get(n % 10)                //  1의 자리 숫자의 불 개수
                count = tens + units
                defaultSegments.set(n, count)                            // 없던 숫자의 세그먼트 개수를 저장함으로써 중복 계산을 방지
            }
            if(n < 10) count += defaultSegments.get(0)                   // 숫자가 10 미만일 경우는 앞에 0이 붙으므로 0의 세그먼트 개수 추가
            return count
        }).reduce((a, b) => a + b)
    }

    for(hour=0; hour<24; hour++) {
        for(min=0; min<60; min++) {
            for(sec=0; sec<60; sec++) {
                if(countSegmentByTime(hour, min ,sec) === length) {
                    resultTime.push(`${regexTime(hour)}시 ${regexTime(min)}분 ${regexTime(sec)}초`)
                    result++ 
                }
            }
        }
    }

    console.log(`${length}개의 세그먼트에 불이 들어왔을 경우 예상할 수 있는 시각은 총 ${result}개 입니다.`)
    console.log(resultTime)
    
}

function regexTime(time) {
    return time / 10 >= 1 ? time : '0' + time
}

solve(30)