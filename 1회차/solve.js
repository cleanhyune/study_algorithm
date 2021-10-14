function solve() {
    var result = 0
    const person = 5

    for(가위 = 0; 가위 <= person; 가위++) {
        for(바위 = 0; 바위 + 가위 <= person; 바위++) {
            보 = person - 가위 - 바위
            if([가위, 바위, 보].filter(n => n == Math.max(가위, 바위, 보)).length === 1) result++
        }
    }
    console.log(`경우의 수 ${result}`)
}

solve()