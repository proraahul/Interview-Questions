function aVeryBigSum(ar) {
    // Initialize a variable to store the sum
    let sum = 0;

    // Loop through the array and add each element to the sum
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }

    // Return the sum as a long integer
    return sum;
}

// Example usage:
const array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const result = aVeryBigSum(array);
console.log(result); // This will print the sum of elements in the array
