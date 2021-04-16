function solution(n) {
    var ans = 0;
    var toCount = n.toString(2);

    for (var c of toCount) {
        if (c === "1") {
            ans += parseInt(c); // ans += 1;
        }
    }
    return ans;
}