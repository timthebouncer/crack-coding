/**
 Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
 For example, the array nums = [0,1,2,4,5,6,7] might become:

 [4,5,6,7,0,1,2] if it was rotated 4 times.
 [0,1,2,4,5,6,7] if it was rotated 7 times.
 Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

 Given the sorted rotated array nums of unique elements, return the minimum element of this array.
 You must write an algorithm that runs in O(log n) time.

 Input: nums = [3,4,5,1,2]
 Output: 1
 Explanation: The original array was [1,2,3,4,5] rotated 3 times.

 **/

const nums = [3,4,5,1,2]

const findMin = (nums)=> {

  let left = 0
  let right = nums.length-1

  while(left < right){
    let midPoint = Math.floor((left + right)/2)

    if(midPoint > 0 && nums[midPoint] < nums[midPoint-1]){
      return nums[midPoint]
    }else if(nums[left] <= nums[midPoint] && nums[midPoint] > nums[right]){
      left = midPoint + 1
    }else{
      right = midPoint - 1
    }
  }
  return nums[left]

};

findMin(nums)
