/**
 Given an integer array nums of unique elements, return all possible subsets (the power set).
 The solution set must not contain duplicate subsets. Return the solution in any order.

 Input: nums = [1,2,3]
 Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 */

const nums = [1,2,3]

const subset=(nums)=>{

    let res = []
    let subset = []

    const dfs=(val)=>{
        if(val >= nums.length){
            res.push(subset.slice())
            return
        }
        subset.push(nums[val])
        dfs(val+1)
        subset.pop(nums[val])
        dfs(val+1)

    }

    dfs(0)
    return res
}

console.log(subset(nums));