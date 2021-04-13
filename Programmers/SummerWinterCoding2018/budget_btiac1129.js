function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        else if (a === b) return 0;
    });

    for (let element of d) {
        if (budget - element >= 0) {
            budget -= element;
            answer += 1;
        } else if (budget - element < 0) {
            break;
        }
    }

    return answer;
}