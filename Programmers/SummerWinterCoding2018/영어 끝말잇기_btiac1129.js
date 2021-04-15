function solution(n, words) {
    var answer = [];

    // words Array 순회
    for (let key in words) {
        // 1. 현재 단어의 마지막 글자가 이전 단어의 첫 글자와 같은지 비교
        if (parseInt(key) > 0) {
            var prev = words[parseInt(key) - 1];
            if (words[key].charAt(0) !== prev.charAt(prev.length - 1)) {
                answer = [(parseInt(key) % n) + 1, parseInt(parseInt(key) / n) + 1];
                return answer;
            }
        }
        // 2. 현재 단어가 반복된 단어인지
        if (parseInt(key) > 0) {
            if (words.slice(0, key).includes(words[key])) {
                answer = [(parseInt(key) % n) + 1, parseInt(parseInt(key) / n) + 1];
                return answer;
            }
        }
    }

    return [0, 0];
}