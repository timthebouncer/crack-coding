/**
 Given an integer array nums and an integer k, return the kth largest element in the array.
 Note that it is the kth largest element in the sorted order, not the kth distinct element.

 Input: nums = [3,2,1,5,6,4], k = 2
 Output: 5
 */


const nums = [3,2,1,5,6,4], k = 2

const kthLargestElement=(nums,k)=>{
    nums.sort((a,b)=>a-b)
    return nums[nums.length-k]
}
kthLargestElement(nums,k)