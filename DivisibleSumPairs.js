function divisibleSumPairs(n, ar, k) {
    let count = 0;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        if ((ar[i] + ar[j]) % k === 0) {
          count++;
        }
      }
    }
  
    return count;
  }
  
  // Example usage:
  const n = 5; // Length of the array
  const ar = [1,2,3,4,5]; // Array of integers
  const k = 5; // Integer divisor
  
  let pairsCount = divisibleSumPairs(n, ar, k);
  console.log(pairsCount); 
  