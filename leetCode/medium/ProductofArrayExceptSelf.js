
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
//
// reform: [ 1, 1, 2, 6 ]
//   [ 24, 12, 4, 1 ]
//
// let N = nums.length;
// let leftList = [];
// let rightList = [];
// let resultList= [];
//
// leftList[0] = 1;
// rightList[N-1] = 1;
//
// for(let i=1; i<N;i++){
//   leftList[i] = nums[i-1] * leftList[i-1]
// }
// for(let i=N-2;i>=0;i--){
//   rightList[i] = nums[i+1] * rightList[i+1]
// }
// for(let i=0; i<N;i++){
//   resultList[i] = leftList[i] * rightList[i]
// }
//
// return resultList
