/* Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
Lily decides to share a contiguous segment of the bar selected such that:
The length of the segment matches Ron's birth month, and,
The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate. 

s=[2,2,1,3,2]
d=4
m=2

Lily wants to find segments summing to Ron's birth day, d =4  with a length equalling his birth month, m=2 . In this case, there are two segments meeting her criteria: [2,2] and [1,3].
*/

function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i <= s.length - m; i++) {
    let segmentSum = 0;

    for (let j = 0; j < m; j++) {
      segmentSum += s[i + j];
    }

    if (segmentSum === d) {
      count++;
    }
  }

  return count;
}

const chocolate = [1, 2, 1, 3, 2];
const birthDay = 3;
const birthMonth = 2;

const waysToDivide = birthday(chocolate, birthDay, birthMonth);
console.log(waysToDivide);
