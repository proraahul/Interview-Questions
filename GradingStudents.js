/* HackerLand University has the following grading policy:

Every student receives a in the inclusive range from 0 to 100.
Any less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's according to these rules:

If the difference between the and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
If the value of  is less than 38, no rounding occurs as the result will still be a failing grade. */


function gradingStudents(grades) {
    const roundedGrades = [];

    for (const grade of grades) {
        if (grade < 38) {
        // If the grade is less than 38, no rounding occurs
        roundedGrades.push(grade);
        } else {
        // Calculate the next multiple of 5
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;

        if (nextMultipleOf5 - grade < 3) {
          // If the difference is less than 3, round up to the next multiple of 5
            roundedGrades.push(nextMultipleOf5);
        } else {
          // Otherwise, keep the grade as is
            roundedGrades.push(grade);
        }
        }
    }

    return roundedGrades;
    }

  // Example usage:
    const grades = [4, 73, 67, 38, 33];
    const roundedGrades = gradingStudents(grades);
    console.log(roundedGrades);