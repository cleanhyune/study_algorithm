function solve(length = 1) {
    var result = 0

    const hash = new Map([
        [1000, 'M'],
        [500,  'D'],
        [100,  'C'],
        [50,   'L'],
        [10,   'X'],
        [5,    'V'],
        [1,    'I']
    ])

    function getRomaChrByNumber(n) {
        for (var key of hash.keys()) {
            if(n >= key) {
                if(parseInt(n / key) === 4 || parseInt(n / (n > 100 ? 100 : n > 10 ? 10 : 1)) === 9) { // 4, 40, 400 혹은 9, 90, 900으로 떨어질 때
                    if(String(key).charAt(0) === '5') {                                                // 9, 90, 900
                        return {romaChr: n > 100 ? 'CM' : n > 10 ? 'XC' : 'IX', remain: n - (n > 100 ? 900 : n > 10 ? 90 : 9)}
                    }else {                                                                            // 4, 40, 400
                        return {romaChr: n > 100 ? 'CD' : n > 10 ? 'XL' : 'IV', remain: n - (n > 100 ? 400 : n > 10 ? 40 : 4)}
                    }
                }
                return {romaChr: hash.get(key), remain: n - key}
            }
        }
    }

    for(i=1; i<4000;i++) {
        var romaStr = ''
        var remainNumber = i
        
        do {
            const {romaChr, remain} = getRomaChrByNumber(remainNumber)
            remainNumber = remain
            romaStr += romaChr
        }while(remainNumber > 0)

        if(romaStr.length === length) result ++
    }
    console.log(`${length}자리 기호로 만들 수 있는 로마 숫자는 총 ${result}개 입니다.`)
}

solve(12);