function solution(arr){
    let answer = 0;
    let list = arr.slice();
    let cnt = [];

    for(let i = 0; i < list.length; i++){
        let nums = String(list[i]).split("");
        const count = nums.reduce((num, check) => {
            if(num[check]) num[check] += 1;
            else num[check] = 1;
            return num;
        }, {});
        cnt.push(count);
    }

    const result = cnt.filter((val,idx) => {
        return idx === cnt.findIndex(v => {
            return JSON.stringify(v) === JSON.stringify(val);
        });
    });

    answer = result.length;
    return answer;
}

const ar = [112, 1814, 121, 1481, 1184];
console.log(solution(ar))

