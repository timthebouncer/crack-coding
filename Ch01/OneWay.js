

const oneWay=(str1, str2)=>{

    if(Math.abs(str1.length - str2.length) > 1)return false

    let diff = 0;
    let leftIndex = 0;
    let rightIndex = 0;


    while(diff < 2 && leftIndex <= str1.length && rightIndex <= str2.length){
        console.log(str1[leftIndex],str2[rightIndex])
        if(str1[leftIndex] !== str2[rightIndex]){
            diff++;
            if(str1[leftIndex + 1] === str2[rightIndex]) {
                leftIndex++
            }
            else if(str1[leftIndex] === str2[rightIndex + 1]) {
                rightIndex++
            }
        }
        leftIndex++;
        rightIndex++;
    }
    console.log(diff)
    return diff < 2 && diff !== 0


}

console.log(oneWay("bales", "pale"))
