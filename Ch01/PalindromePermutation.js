
const PalindromePermutation1=(str)=>{

  let rmSpaceStr = str.toLowerCase()

  let i = 1;
  while (i <= Math.floor(rmSpaceStr.length / 2) ){
    if(rmSpaceStr[i-1] !== rmSpaceStr[rmSpaceStr.length-i]){
      return false
    }else {
      i++;
    }

  }
  return true

}

const PalindromePermutation2=(str)=>{

  // let i = 0;
  // let t = str.length - 1;
  //
  // str = str.toLowerCase()
  //
  // while (i <= t){
  //
  //   let getLeft = str[i];
  //   let getRight = str[t];
  //
  //   if(!(getLeft >= 'a' && getLeft <= 'z')){
  //     i++;
  //   }else if(!(getRight >= 'a' && getRight <= 'z')){
  //     t--;
  //   }else if(getLeft === getRight){
  //     i++;
  //     t--;
  //   }else {
  //     return false
  //   }
  //
  // }
  // return true


  let char_counts = [];
  for (let i=0; i<str.length;i++){
    char_counts[str.charAt(i)] = char_counts[str.charAt(i)] ? char_counts[str.charAt(i)] +1 : 1
  }
  let count = 0;
  for (let i=0;i<str.length;i++){
    count += char_counts[str.charAt(i)] % 2

  }
  return count <= 1;
}

// const bt = Date.now()
// for (let i = 0; i < 10000; i++) {
//   PalindromePermutation1("Too hot to hoot Too hot to hoot Too hot to hoot Too hot to hoot Too hot to hoot Too hot to hoot Too hot to hoot Too hot to hoot Too hot to hoot")
// }
// const at = Date.now()
// console.log((at - bt) / 1000)

const bt2 = Date.now()
for (let i = 0; i < 1; i++) {
  // PalindromePermutation2("Too hot to hoot Too hot to hoot Too hot to hoot Too hot to hoot Too hot to hoot Too hot to hoot Too hot to hoot Too hot to hoot Too hot to hoot.")
}
console.log(PalindromePermutation2("abba"));

const at2 = Date.now()
console.log((at2 - bt2) / 1000)
