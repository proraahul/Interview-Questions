function plusMinus(arr) {
    const n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
  
    // Count positive, negative, and zero elements
    for (const num of arr) {
      if (num > 0) {
        positiveCount++;
      } else if (num < 0) {
        negativeCount++;
      } else {
        zeroCount++;
      }
    }
  
    // Calculate the ratios
    const positiveRatio = positiveCount / n;
    const negativeRatio = negativeCount / n;
    const zeroRatio = zeroCount / n;
  
    // Print the ratios with 6 decimal places
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
  }
  
  // Example usage:
  const arr = [-4, 3, -9, 0, 4, 1];
  plusMinus(arr);