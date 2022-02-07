//123
//456
//789

//741
//852
//963

function rotate(matrix) {
    let N = matrix.length
    let temp;
    for (let i = 0; i<N; i++){
        for (let j=i; j<N; j++){
            temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    for (let i = 0; i<N; i++){
        for (let j=0; j<N/2; j++){
            temp = matrix[i][j]
            matrix[i][j] = matrix[i][N-1-j]
            matrix[i][N-1-j] = temp
        }
    }
    console.log(matrix)

}
rotate([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])

//9,5,1,4
//10,6,2,8
//11,7,3,12