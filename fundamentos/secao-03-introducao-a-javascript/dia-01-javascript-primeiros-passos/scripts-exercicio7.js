let grade = '31';

if (grade < 0 || grade > 100) {
    console.log('Error: grade should sit between 0 and 100.');
} else if (grade >= 90) {
    console.log('Your grade is: A');
} else if (grade >= 80) {
    console.log('Your grade is: B');
} else if (grade >= 70) {
    console.log('Your grade is: C');
} else if (grade >= 60) {
    console.log('Your grade is: D');
} else if (grade >= 50) {
    console.log('Your grade is: E');
} else if (grade < 50) {
    console.log('Your grade is: F');
}