
const nums = [-1,0,1,2,-1,-4]

const threeSum=(nums)=>{

    nums.sort(function (a,b) {return a-b})

    const output_arr = [];

    for (let i = 0; i < nums.length-2; i++) {
        if(i === 0 || (i > 0 && nums[i] === nums[i+1])){
            let low = i;
            let high = nums.length - 1;
            let sum = 0 - nums[i]

            while (low < high){
                if(nums[low] + nums[high] === sum){
                    output_arr.push([nums[i],nums[low],nums[high]])
                    while (low < high && nums[low+1]) low++;
                    while (low < high && nums[high+1]) high--;
                    low++;
                    high--
                }else if(nums[low] + nums[high] > sum){
                    high--;
                }else {
                    low++;
                }
            }
        }
    }

    // for (let i = 0; i < nums.length; i++) {
    //
    //     if(i > 0 && nums[i] === nums[i-1]){
    //         let low = i+1;
    //         let high = nums.length - 1;
    //         while (low < high){
    //             let sum = nums[i] + nums[low] + nums[high]
    //             if(sum > 0){
    //                 high-=1
    //             }else if(sum < 0){
    //                 low += 1
    //             }else {
    //                 output_arr.push([nums[i], nums[low], nums[high]])
    //                 low += 1
    //                 while (nums[low] === nums[low-1] && low < high){
    //                     low+=1
    //                 }
    //             }
    //         }
    //     }
    //
    // }

    console.log(output_arr)
    return output_arr


}

threeSum(nums)