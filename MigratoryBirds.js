function migratoryBirds(arr) {
    const birdCounts = {}; // Object to store the count of each bird type
  
    // Loop through the bird sightings and count each bird type
    for (const birdType of arr) {
      if (birdCounts[birdType]) {
        birdCounts[birdType]++;
      } else {
        birdCounts[birdType] = 1;
      }
    }

    let maxCount = 0; // Maximum count of bird sightings
    let mostFrequentBird = Number.POSITIVE_INFINITY; // Initialize with positive infinity
  
    // Find the most frequently sighted bird type
    for (const birdType in birdCounts) {
      if (birdCounts[birdType] > maxCount) {
        maxCount = birdCounts[birdType];
        mostFrequentBird = birdType;
      } else if (birdCounts[birdType] === maxCount && birdType < mostFrequentBird) {
        mostFrequentBird = birdType;
      }
    }
    return mostFrequentBird;
  }

  
  //Example Usage:
  const birdSightings = [1, 1, 2, 2, 3,2];
  const mostFrequentBirdType = migratoryBirds(birdSightings);
  console.log(mostFrequentBirdType);
  