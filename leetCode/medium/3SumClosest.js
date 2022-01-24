

const threeSumClosest=(nums,target)=>{
    nums.sort(function(a,b){return a-b})
    let result = nums[0] + nums[1] + nums[nums.length-1]

    for (let i=0; i<nums.length-2; i++){

        let a_pointer = i+1;
        let b_pointer = nums.length-1;

        while (a_pointer < b_pointer){
            let current_sum = nums[i] + nums[a_pointer] + nums[b_pointer]
            if(current_sum > target){
                b_pointer -= 1;
            }else {
                a_pointer += 1;
            }
            if(Math.abs(current_sum-target) < Math.abs(result-target)){
                result = current_sum
            }
        }
    }
    return result
}


// console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([1,2,4,8,16,32,64,128], 82));
