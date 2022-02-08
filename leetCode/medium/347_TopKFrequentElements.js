/**Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
**/


const nums = [1,1,1,2,2,3], k = 2


const topKFrequent = (nums, k)=> {
  // results array
  let results = [];

  // 1) first step is to build a hash map, where "element -> its frequency"
  // it costs O(n), where n is nums.length
  let map = {};
  nums.forEach(n => map[n] ? map[n] += 1 : map[n] = 1);

  // 2) sort the map keys array based on its frequency
  // it costs O(log n), where n is nums.length
  let sortedKeys = Object.keys(map).sort((a,b)=>map[b]-map[a]);

  // 3) take first k results
  for(let i = 0; i < k; i++){
    results.push(sortedKeys[i]);
  }

  // as result we have O(n Log n) where n is length of nums
  return results;
};
topKFrequent(nums, k)
