function migratoryBirds(arr) {
  let seenBirds = {};

  arr.forEach((bird) => {
    if (seenBirds[bird]) {
      seenBirds[bird]++;
    } else {
      seenBirds[bird] = 1;
    }
  });

  let birdId = 0;
  let total = 0;

  for (let key in seenBirds) {
    // is it seen more
    if (seenBirds[key] > total) {
      total = seenBirds[key];
      birdId = parseInt(key);
    } else if (seenBirds[key == total]) {
      // is it same
      // is the bird id less then the current birdId
      if (parseInt(key) < birdId) {
        birdId = parseInt(key);
      }
    }
  }
  return birdId;
}

//Example Usage:
const birdSightings = [3, 1, 1, 2,3, 2, 3, 2,3];
const mostFrequentBirdType = migratoryBirds(birdSightings);
console.log(mostFrequentBirdType);
