console.log(solution(7));

function solution(n) {
    const nums = ['4', '1', '2'];
    let answer = '';
    
    while(n > 0){
        answer = nums[n % 3] + answer;
        n = Math.floor((n - 1) / 3);
    }
    
    return answer;
}