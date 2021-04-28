// 주어진 문자열 s가 올바른 괄호 문자열인지 검사하는 함수
const checkString = (s) => {
    const pars = ["()", "{}", "[]"];
    var stack = "";

    for (var i = 0; i < s.length; i++) {
        stack = stack.concat(s.charAt(i));
        // 현재 스택에 올바른 문자열들 pars 중 하나가 포함되었다면
        pars.forEach((par) => {
            if (stack.includes(par)) {
                // 그만큼 스택을 비운다.
                stack = stack.replace(par, "");
            }
        });
    }
    if (stack === "") {
        return true;
    }
};

function solution(s) {
    var rotation = 0;
    // 문자열 s의 길이만큼 s를 왼쪽으로 회전
    for (var i = 0; i < s.length; i++) {
        if (checkString(s)) {
            // s가 올바른 문자열일 때, 합당한 회전이었으므로 +1
            rotation += 1;
        }
        // s를 왼쪽으로 1만큼 회전된 문자열로 만들기
        s = s.substring(1, s.length) + s.charAt(0);
    }
    return rotation;
}