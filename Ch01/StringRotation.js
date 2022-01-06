

const stringRotation=(A,B)=>{

    return (A.length === B.length && (A+A).includes(B))
}

console.log(stringRotation('abcde','cdeab'))