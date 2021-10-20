function solve(start, end) {
    const total_platform = 43
    var cls = Math.abs(start - end)
    var in_result = cls - 1
    var out_reslut = total_platform - in_result - 2
    
    var result = (2 ** in_result) + (2 ** out_reslut) - 1
    console.log(result)
}

//solve(1, 17)

function solve2(start, end) {
    const total_platform = 43
    var cls = Math.abs(start - end)
    var in_result = cls - 1
    var out_reslut = total_platform - in_result - 2
    
    var result = (1 << in_result) + (1 << out_reslut) - 1
    console.log(result)
}

solve2(1, 17)