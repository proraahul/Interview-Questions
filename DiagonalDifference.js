function diagonalDifference(arr) {
    // Write your code here
    let ltr_diagonal = 0;
    let rtl_diagonal = 0;

    for(let i=0; i<arr.length; i++){
        ltr_diagonal += arr[i][i];
        rtl_diagonal += arr[i][arr.length-i-1];
    }
    let result = Math.abs(ltr_diagonal - rtl_diagonal);
    return result;
}

let arr = [ [11, 2, 4 ],[4, 5, 6],[10, 8, -12] ];
let diagonalResult = diagonalDifference(arr);
console.log(diagonalResult);