function solution(skill, skill_trees) {
    var answer = 0;
    var temp_skill = "";
    var new_skill_tree = "";

    skill_trees.forEach((skill_tree) => {
        // skill_tree에서 skill에 있는 스킬만 순서대로 새 스킬트리에 담는다.
        for (var i = 0; i < skill_tree.length; i++) {
            if (skill.includes(skill_tree.charAt(i))) {
                new_skill_tree += skill_tree.charAt(i);
            }
        }

        // skill을 새 스킬트리의 길이와 같게 만들어 slice 한 후 반환한다.
        temp_skill = skill.slice(0, new_skill_tree.length);

        // 임시 스킬 값으로 새 스킬트리와 비교한 후, 같으면 answer += 1
        if (temp_skill === new_skill_tree) { answer += 1; }

        new_skill_tree = "";
    })

    return answer;
}