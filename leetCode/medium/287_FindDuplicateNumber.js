/**
 Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

 There is only one repeated number in nums, return this repeated number.

 You must solve the problem without modifying the array nums and uses only constant extra space.


 Input: nums = [1,3,4,2,2]
 Output: 2
**/

const nums = [1,3,4,2,2]

//method1

const findDuplicate=(nums)=>{
  let slow = nums[0];
  let fast = nums[nums[0]];

  while (slow != fast) { // we are guaranteed to have a cycle
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  console.log(slow)
  return slow;
}

findDuplicate(nums)


//method2

// let hashTable = {}
//
// for(let i=0;i<nums.length;i++){
//   if(hashTable[nums[i]]){
//     return nums[i]
//   }else{
//     hashTable[nums[i]] = 1
//   }
// }
