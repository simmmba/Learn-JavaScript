function solution(reqs){
    let answer = [];
    let list = reqs.slice();
    let bank = [];

    for(let i = 0; i < list.length; i++){
        let req = list[i].split(" ");

        if(req[0] === "CREATE"){ // 개설
            if(!bank.some(b => b.id === req[1])) { // 없는 계좌일 때
                bank.push({id : req[1], limit : Number(req[2])});
                answer.push(200);
            } else{
                answer.push(403);
            }
        } else if(req[0] === "DEPOSIT"){ // 입금
            if(!bank.some(b => b.id === req[1])) { // 없는 계좌일 때
                answer.push(404);
            } else{
                let idx = bank.findIndex(b => b.id === req[1])
                bank[idx].limit += Number(req[2]);
                answer.push(200);
            }
            
        } else{ // 출금
            if(!bank.some(b => b.id === req[1])) { // 없는 계좌일 때
                answer.push(404);
            } else{
                let idx = bank.findIndex(b => b.id === req[1])
                if(bank[idx].limit < Number(req[2])){
                    answer.push(403);
                }
                else{
                    bank[idx].limit -= Number(req[2]);
                    answer.push(200);
                }
            }
        }
    }
    
    return answer;
}

// const ar = ["CREATE 3a 10000", "CREATE 3a 20000", "CREATE 2bw 30000"];
const ar = ["DEPOSIT 3a 10000", "CREATE 3a 300000", "WITHDRAW 3a 150000", "WITHDRAW 3a 150001"];
console.log(solution(ar))

