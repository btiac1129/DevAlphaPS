function solution(brown, yellow) {
    // answer is [가로 크기, 세로 크기]
    var answer = [];
    // brown + yellow === width * height
    var sum = brown + yellow;
    var width = 0;
    var height = 0;
    // sum 의 약수를 담는 배열 factors
    var factors = [];
    for (var i = 1; i <= sum; i++) {
        if (sum % i === 0) {
            factors.push(i);
        }
    }
    // 약수들 중 조건을 만족하는 쌍을 찾아 width, height 으로 지정
    for (var i = 0; i < factors.length / 2; i++) {
        height = factors[i];
        width = factors[factors.length - 1 - i];

        if ((width - 2) * (height - 2) === yellow) {
            answer = [width, height];
            break;
        }
    }

    return answer;
}