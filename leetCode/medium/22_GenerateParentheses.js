/**
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
**/

const n = 3

const generateParentheses=(n)=>{
    let res = [];
    const backTrack=(str,openN,closeN)=>{

        if(openN > closeN)return

        if(openN === 0 && closeN === 0){
            res.push(str)
            return;
        }
        if(openN > 0){
            backTrack(`${str}(`,openN-1,closeN)
        }
        if(closeN > 0){
            backTrack(`${str})`,openN,closeN-1)
        }
    }

    backTrack("",n,n)
    console.log(res)
}

generateParentheses(n)