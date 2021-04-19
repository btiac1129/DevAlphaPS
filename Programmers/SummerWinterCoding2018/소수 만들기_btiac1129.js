function isPrime(num) {
    // 주어진 숫자가 1일 경우, 소수가 아님.
    if (num === 1) {
        return false;
    }

    // 주어진 숫자가 2일 경우, 소수.
    // 주어진 숫자가 2를 제외한 짝수일 경우, 소수가 아님.
    if (num % 2 === 0) {
        return num === 2;
    }

    // 주어진 숫자를 3 이상의 홀수로 나누었을 때, 나누어 떨어질 경우 소수가 아님.
    for (var t = 3; t < num; t += 2) {
        if (num % t === 0) {
            return false;
        }
    }

    // 위의 모든 경우의 수에 포함되지 않을 경우, 소수임.
    return true;
}

function solution(nums) {
    var answer = 0;
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            for (var p = j + 1; p < nums.length; p++) {
                sum = nums[i] + nums[j] + nums[p];
                if (isPrime(sum)) {
                    answer += 1;
                }
            }
        }
    }

    return answer;
}