const nums = [2,0,2,1,1,0]

const sortColors =(nums)=> {


  let l = 0
  let r = nums.length-1
  let i = 0

  while(i <= r){

    if(nums[i] === 0){
      swap(l,i)
      l++
    }else if(nums[i] === 2){
      swap(i,r)
      r--
      i--
    }
    i++

  }

  function swap(i,j){
    let tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }

  return nums
};
sortColors(nums)
