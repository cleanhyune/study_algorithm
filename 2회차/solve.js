function solve(start, end) {
    const total_platform = 43
    var cls = Math.abs(start - end)
    var in_result = cls - 1
    var out_reslut = total_platform - cls - 1
    
    var result = ((2 ** in_result) + (2 ** out_reslut)) - 1
    console.log(result)
}

function official_solve() {
     var a = 2
}

solve(1, 2)