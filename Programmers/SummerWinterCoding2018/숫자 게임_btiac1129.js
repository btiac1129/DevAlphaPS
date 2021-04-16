function solution(A, B) {
    var answer = 0;
    var adx = 0;
    var bdx = 0;

    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    while (bdx < B.length) {
        if (A[adx] < B[bdx]) {
            adx += 1;
            bdx += 1;
            answer += 1;
        } else {
            bdx += 1;
        }
    }

    return answer;
}