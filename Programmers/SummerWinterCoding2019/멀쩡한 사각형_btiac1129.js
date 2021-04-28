function solution(w, h) {
    var answer = 0;
    var bigger = Math.max(w, h);
    var smaller = Math.min(w, h);
    var gcd = 0;

    for (var i = 1; i <= smaller; i++) {
        if (bigger % i === 0 && smaller % i === 0) {
            gcd = i;
        }
    }
    answer = w + h - gcd;
    return answer;
}