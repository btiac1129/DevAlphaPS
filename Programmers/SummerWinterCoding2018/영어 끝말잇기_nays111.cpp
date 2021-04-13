#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

vector<int> solution(int n, vector<string> words) {
    vector<int> answer;
    
    string start = words[0];
    
    //지금까지 말한 단어
    vector<string> spoke;

    spoke.push_back(start);
    
    for(int i=1;i<words.size();i++){
        //제대로 말한 경우
        //끝말을 이은 경우 + 아직 말한 단어가 아닌 경우
        if(start[start.size()-1] == words[i][0] && find(spoke.begin(),spoke.end(),words[i]) == spoke.end()){
            spoke.push_back(words[i]);
            start = words[i];
        }else{
            if((i+1)%n == 0){
                answer.push_back(n);
                answer.push_back((i+1)/n);
            }else{
                answer.push_back((i+1)%n);
                answer.push_back((i+n)/n);
            }
            break;
        }
    }
    //탈락자가 없는 경우
    if(answer.empty()){
        answer.push_back(0);
        answer.push_back(0);
    }

    return answer;
}