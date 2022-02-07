/**Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.**/
/**
 Input: nums = [1,2,3]
 Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 **/


const nums = [1,2,3]

const permutation=(nums)=>{

   const result = [];
   const temp = [];

    findPermutation(temp,nums, result)
    return result
}

const findPermutation=(temp,nums, result)=>{
    if(!nums.length){
        result.push(temp.concat())
    }
    for (let i = 0; i < nums.length; i++) {
        const newNum = nums[i]
        temp.push(newNum)

        nums.splice(i,1)
        findPermutation(temp,nums,result)
        temp.pop()
        nums.splice(i,0,newNum)
    }
}


console.log(permutation(nums));