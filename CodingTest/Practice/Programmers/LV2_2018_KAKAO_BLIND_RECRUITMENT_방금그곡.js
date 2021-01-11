const s = "ABCDEFG";
const arr = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"];
console.log(solution(s,	arr));

function solution(m, musicinfos) {
    let answer = "(None)";
    let info, start, end, time, play, p;
    let longest = 0;
    let changeM = "";

    for(let idx = 0; idx < m.length; idx++){
        if(m.charAt(idx) === "#") continue;

        if(idx + 1 < m.length && m.charAt(idx + 1) === "#") {
            changeM += m.charAt(idx).toLowerCase();
        }
        else changeM += m.charAt(idx);
    }

    for(let idx = 0; idx < musicinfos.length; idx++){
        info = musicinfos[idx].split(",");
        start = info[0].split(":");
        end = info[1].split(":");
        time = (Number(end[0]) * 60 + Number(end[1])) - (Number(start[0]) * 60 + Number(start[1]));
        play = "";
        p = 0;

        for(let t = 0; t < time; t++){
            if(p + 1 < info[3].length && info[3].charAt(p + 1) === "#") {
                play += info[3].charAt(p).toLowerCase();
                p++;
            }
            else play += info[3].charAt(p);

            if(p + 1 === info[3].length) p = 0;
            else p++;
        }

        if(play.includes(changeM) && time > longest) {
            answer = info[2];
            longest = time;
        }
    }

    return answer;
}

// m	musicinfos	answer
// ABCDEFG	[12:00,12:14,HELLO,CDEFGAB, 13:00,13:05,WORLD,ABCDEF]	HELLO
// CC#BCC#BCC#BCC#B	[03:00,03:30,FOO,CC#B, 04:00,04:08,BAR,CC#BCC#BCC#B]	FOO
// ABC	[12:00,12:14,HELLO,C#DEFGAB, 13:00,13:05,WORLD,ABCDEF]	WORLD