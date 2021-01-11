const s = "ABCDEFG";
const arr = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"];
console.log(solution(s, arr));

function solution(m, musicinfos) {
    const getMinutes = s => s.substr(0, 2) * 60 + +s.substr(3);

    m = m.replace(/\w#/g, a => a[0].toLowerCase());

    let answer = musicinfos
        .map(info => {
            info = info.split(',');

            let playMinutes = getMinutes(info[1]) - getMinutes(info[0]),
                melody = info[3].replace(/\w#/g, a => a[0].toLowerCase());

            melody = playMinutes > melody.length
                ? melody.padEnd(playMinutes, melody)
                : melody.substr(0, playMinutes);

            return { playMinutes: playMinutes, melody: melody, name: info[2], startTime: getMinutes(info[0]) };
        })
        .filter(info => new RegExp(m).test(info.melody));

    if (answer.length) {
        if (answer.length > 1) {
            answer = answer.filter(v => v.playMinutes >= Math.max(...answer.map(val => val.playMinutes)));

            if (answer.length > 1) {
                answer = answer.filter(v => v.startTime <= Math.min(...answer.map(val => val.startTime)));
            }
        }

        return answer[0].name;
    }

    return "(None)";
}

// m	musicinfos	answer
// ABCDEFG	[12:00,12:14,HELLO,CDEFGAB, 13:00,13:05,WORLD,ABCDEF]	HELLO
// CC#BCC#BCC#BCC#B	[03:00,03:30,FOO,CC#B, 04:00,04:08,BAR,CC#BCC#BCC#B]	FOO
// ABC	[12:00,12:14,HELLO,C#DEFGAB, 13:00,13:05,WORLD,ABCDEF]	WORLD