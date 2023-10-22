/* There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example:
There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is.

Function Description
Complete the sockMerchant function

sockMerchant has the following parameter(s):
int n: the number of socks in the pile
int ar[n]: the colors of each sock

Returns
int: the number of pairs
Input Format

The first line contains an integer n, the number of socks represented in ar.
The second line contains n space-separated integers,ar[i], the colors of the socks in the pile. */

function sockMerchant(n, ar) {
    // Create an object to store the count of each color
    const colorCount = {};
  
    // Initialize a variable to keep track of the number of pairs
    let pairs = 0;
  
    // Count the occurrences of each color
    for (let i = 0; i < n; i++) {
      const color = ar[i];
      colorCount[color] = (colorCount[color] || 0) + 1;
    }
  
    // Calculate the number of pairs for each color
    for (const color in colorCount) {
      pairs += Math.floor(colorCount[color] / 2);
    }
  
    return pairs;
  }
  
  // Example usage:
  const n = 9;
  const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
  const result = sockMerchant(n, ar);
  console.log(result); // Output: 3
  