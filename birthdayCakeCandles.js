/* You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest. */

function birthdayCakeCandles(candles) {
    // Find the maximum height of the candles
    const maxHeight = Math.max(...candles);
  
    // Count the number of candles with the maximum height
    const tallestCandles = candles.filter((height) => height === maxHeight);
  
    return tallestCandles.length;
  }
  
  // Example usage:
  const candleHeights = [4, 4, 1, 3];
  const tallestCandleCount = birthdayCakeCandles(candleHeights);
  console.log(tallestCandleCount); 