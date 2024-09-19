// Given a 2-D String array of student-marks find the student with the highest average and output his average score. If the average is in decimals, floor it down to the nearest integer.

// Example 1:

// Input:  [{"Bob","87"}, {"Mike", "35"},{"Bob", "52"}, {"Jason","35"}, {"Mike", "55"}, {"Jessica", "99"}]
// Output: 99
// Explanation: Since Jessica's average is greater than Bob's, Mike's and Jason's average.

function findHighestAverageScore(scores) {
    // Object to store total scores and count for each student
    const studentScores = {};

    // Collect scores for each student
    for (const [name, score] of scores) {
        const parsedScore = parseInt(score);

        if (!studentScores[name]) {
            studentScores[name] = { total: 0, count: 0 };
        }

        studentScores[name].total += parsedScore;
        studentScores[name].count += 1;
    }

    // Find the highest average
    let maxAverage = -Infinity;

    for (const student in studentScores) {
        const { total, count } = studentScores[student];
        const average = Math.floor(total / count); // Floor the average

        if (average > maxAverage) {
            maxAverage = average;
        }
    }

    return maxAverage;
}

// Test the function
const scores = [["Bob","87"], ["Mike", "35"], ["Bob", "52"], ["Jason","35"], ["Mike", "55"], ["Jessica", "99"]];
console.log(findHighestAverageScore(scores)); // Output: 99
