function solution(arr){
    let answer = 0;
    let list = arr.slice();
    let temp = [];

    if(arr.length === 1){
        answer = 1;
    }

    else{
        while(!(list.length === 1 && list[0] === 1)){
            // const count = list.reduce((acc, curr, idx) => {
            //     if(acc[idx]) acc[idx] += 1;
            //     else acc[idx] = 1;
            //     answer++;
            //     return acc;
            //   }, {});
            temp.push(1);
            for(let i = 1; i < list.length; i++){
                if(list[i] === list[i-1]) temp[temp.length-1]++;
                else temp.push(1);
            }
            list = temp.slice();
            temp = [];
            answer++;
        }
    }
    
    return answer;
}

const ar = [1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3 ];
console.log(solution(ar))

