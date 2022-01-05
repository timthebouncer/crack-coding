

const IsUnique=(str)=>{

  const findStr = 1;
  let hashTable = {};

  for (let i=0; i<str.length; i++){
    if(hashTable[str[i]] === findStr){
      return false
    }else {
      hashTable[str[i]] = findStr
    }
  }
  return true



  // let hashTable = [];

  // for(let i=0; i < str.length; i++){
  //   if(!hashTable.includes(str[i])){
  //     hashTable.push(str[i])
  //   }else {
  //     return false
  //   }
  //
  // }
  // return true




}

console.log(IsUnique("abcde"))
