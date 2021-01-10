process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    let n = data.split(" ");
    let a = Number(n[0]), b = Number(n[1]);
    
    for(let i = 0; i < b; i++){
        for(let j = 0; j < a; j++){
            process.stdout.write("*");
        }
            process.stdout.write("\n");
    }
});