console.log(solution("110010101001"));

function solution(s) {
    let value = s;
    let change = 0;
    let zeroCount = 0;
    let valueLength;

    while(value !== '1'){
        while(value.indexOf('0') !== -1){
            value = value.replace('0', '');
            zeroCount++;
        }
        change++;
        valueLength = value.length;
        value = valueLength.toString(2);
    }

    return [change, zeroCount];
}

// s	result
// "110010101001"	[3,8]
// "01110"	[3,3]
// "1111111"	[4,1]