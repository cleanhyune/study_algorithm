function solve() {
    
    var result = 0
    const maxLine = 5

    const func = (long, short) => {

        console.log(long, short)

        var cnt = 1

        var minSize = 0
        if(short > 1) 
            minSize = short*2
        else minSize = 1

        
        if(long*short - minSize > 0) {
            var a = long*short // 6
            var b  = minSize   // 4 
            cnt = cnt+ func()
        }

        return cnt;
    }

    for(i=1;i<=maxLine;i++) {
        for(j=1;j<i;j++) {
            long = i
            short = j

            var sizeCount = func(long, short)
            if(sizeCount === 5) {
                result++
            }

        }
    }

    console.log(result)

}

solve()