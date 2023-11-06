function miniMaxSum(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    // Calculate the minimum sum by excluding the last element
    const minSum = arr.slice(0, 4).reduce((acc, currentValue) => acc + currentValue, 0);
  
    // Calculate the maximum sum by excluding the first element
    const maxSum = arr.slice(1).reduce((acc, currentValue) => acc + currentValue, 0);
  
    console.log(minSum, maxSum);
  }
  
  // Example usage:
  const arr = [1, 3, 5, 7, 9];
  miniMaxSum(arr);
  