const move = (cmd, [x, y]) => {
    switch (cmd) {
        case "U":
            return [x, y + 1];
        case "D":
            return [x, y - 1];
        case "L":
            return [x - 1, y];
        case "R":
            return [x + 1, y];
    }
};

function solution(dirs) {
    var answer = 0;
    var cur = [0, 0];
    var road = "";
    var reverse_road = "";
    var path = [];
    var prev = cur;

    for (var dir of dirs) {
        cur = move(dir, cur);

        // 현재 위치의 x, y 좌표 중 하나라도 경계를 벗어났다면?
        if (cur[0] < -5 || cur[0] > 5 || cur[1] < -5 || cur[1] > 5) {
            // cur 좌표 값을 원위치로.
            cur = prev;
        } else {
            road = `${prev}, ${cur}`; // 현재 지나온 길 prev -> cur이 경로에 없는지,
            reverse_road = `${cur}, ${prev}`; // cur -> prev 방향일 때도 길은 같은 길이므로 경로에 없는지 검사.
            if (!path.includes(road) && !path.includes(reverse_road)) {
                answer += 1;
                path.push(road);
            }
        }
        // 현재 위치 이동시키기 전에 좌표 값 기록하기.
        prev = cur;
    }
    return answer;
}