function solve(line) {
    arr = [
        [1],
        [1, 1]
    ]

    calc = [10000, 5000, 2000, 1000, 500, 100, 50, 10, 5, 1]

    result = 0

    for(i=2;i<line ;i++) {
        var newArr = []
        for(j=0; j<arr[i -1].length; j++) {
            if(arr[i - 1][j+1] !== undefined)  {
                newArr[j] = arr[i - 1][j] + arr[i-1][j+1]
            }
        }
        arr.push([1, ...newArr, 1])
    }

    var target = []
    target = arr[line - 1]

    target.forEach(money => {
        let n = money
        calc.forEach(c => {
            if(n => c) {
                result += parseInt(n / c)
                n = n % c
            }
        })
    })

    console.log(result)

}

function solveAtHome(line) {

    result = 0
    arr = []

    for(i=0;i<line;i++) {
        var newArr  = []
        var prevArr = arr[i - 1]
        if(prevArr === undefined) {
            newArr = [1]
        }

        arr.push

    }


}

solve(46)