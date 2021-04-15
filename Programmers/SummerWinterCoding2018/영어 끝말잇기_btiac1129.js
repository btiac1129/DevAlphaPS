function solution(n, words) {
    var answer = [];

    // words Array 순회
    for (let key in words) {
        key = parseInt(key);

        // 1. 현재 단어의 마지막 글자가 이전 단어의 첫 글자와 같은지 비교
        if (key > 0) {
            var prev = words[key - 1];
            if (words[key].charAt(0) !== prev.charAt(prev.length - 1)) {
                answer = [(key % n) + 1, parseInt(key / n) + 1];
                return answer;
            }
        }
        // 2. 현재 단어가 반복된 단어인지
        if (key > 0) {
            if (words.slice(0, key).includes(words[key])) {
                answer = [(key % n) + 1, parseInt(key / n) + 1];
                return answer;
            }
        }
    }

    return [0, 0];
}

n = 3;
words = [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
];
console.log(solution(n, words));