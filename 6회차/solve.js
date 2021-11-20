function solve() {
    
    var result = 0
    const maxLine = 1000

    const func = (long, short) => {
        var cnt = 1
        var boxSize = 0

        if(short > 1) boxSize = short*2
        else boxSize = 1
        
        if(long*short - boxSize > 0) {
            var a = long - short
            var b = short

            var newLong = a > b ? a : b
            var newShort = a > b ? b : a

            cnt += func(newLong, newShort)
        }
        return cnt;
    }

    for(i=1;i<=maxLine;i++) {
        for(j=1;j<i;j++) {
            long = i
            short = j

            var sizeCount = func(long, short)
            if(sizeCount === 20) { 
                result++
            }

        }
    }

    console.log(result)

}

solve()