/* Date: 2021-04-24 */

function solution(n, words) {
    var answer = [];
    var prev = words[0];
    var cur = words[1];

    for (var i = 1; i < words.length; i++) {
        cur = words[i];
        // 끝말잇기 검사
        if (cur[0] !== prev[prev.length - 1]) {
            // 탈락자 발생
            answer = [(i % n) + 1, parseInt(i / n) + 1];
            return answer;
        }
        // 중복된 단어 검사
        if (words.indexOf(cur) !== i) {
            answer = [(i % n) + 1, parseInt(i / n) + 1];
            return answer;
        }

        prev = cur;
    }

    return [0, 0];
}