


const CheckPermutation1=(str1, str2)=>{

  if(str1.length !== str2.length) return

  let first = str1.split('')
  let second = str2.split('')

  first.sort();
  second.sort();

  for (let i=0; i<str1.length;i++){

    if(first[i] !== second[i]) return false
  }

  return true

}


function CheckPermutation2(b, a) {
  if(b.length !== a.length) return false
  const m = {b: {}, a: {}}
  for(let i=0;i<b.length;i++){
    const [be, ae] = [b[i], a[i]]
    const [mbe, mae] = [m.b[be]||0, m.a[ae]||0]
    m.b[be] = mbe + 1
    m.a[ae] = mae + 1
  }
  for(const k in m.b) {
    if (m.a[k] == null || m.b[k] !== m.a[k]) return false
  }
  return true
}


const str1 = 'abcc';
const str2 = 'cbaa';
// const bt = Date.now()
// for (let i = 0; i < 100000; i++) { CheckPermutation1(str1, str2) }
// const at = Date.now()
// console.log((at - bt) / 1000)
//
// const bt2 = Date.now()
// for (let i = 0; i < 100000; i++) { CheckPermutation2(str1, str2) }
// const at2 = Date.now()
// console.log((at2 - bt2) / 1000)


