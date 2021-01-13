console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));

function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;

    let cacheList = [];
    let answer = 0;

    cities.forEach(city => {
        city = city.toLowerCase();

        if(cacheList.includes(city)){ // 캐시에 있는 도시
            cacheList.splice(cacheList.indexOf(city), 1);
            answer++;
        } else { // 캐시에 없는 도시
            if(cacheList.length === cacheSize) cacheList.shift();
            answer += 5;
        }
        cacheList.push(city);
    });

    return answer;
}

// 캐시크기(cacheSize)	도시이름(cities)	실행시간
// 3	[Jeju, Pangyo, Seoul, NewYork, LA, Jeju, Pangyo, Seoul, NewYork, LA]	50
// 3	[Jeju, Pangyo, Seoul, Jeju, Pangyo, Seoul, Jeju, Pangyo, Seoul]	21
// 2	[Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome]	60
// 5	[Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome]	52
// 2	[Jeju, Pangyo, NewYork, newyork]	16
// 0	[Jeju, Pangyo, Seoul, NewYork, LA]	25