// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:
//:-> A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
//:-> A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through

function countingValleys(steps, path) {
    let currentAltitude = 0;  // Start at sea level
    let valleysCount = 0;

    for (let i = 0; i < steps; i++) {
        const step = path[i];

        if (step === 'U') {
            currentAltitude++;
        } else {
            currentAltitude--;
        }

        // Check if we just stepped up to sea level after being in a valley
        if (step === 'U' && currentAltitude === 0) {
            valleysCount++;
        }
    }

    return valleysCount;
}

// Example usage:
const steps = 12;
const path = "DDUUDDUDUUUD";
const result = countingValleys(steps, path);
console.log(result);  // Output: 2
