// Exercise 1: Checking the BMI
// Person 1
const person1 = {
  fullName: "Alice",
  mass: 68, // in kg
  height: 1.65, // in meters
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

// Person 2
const person2 = {
  fullName: "Bob",
  mass: 85,
  height: 1.75,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  },
};

// Function to compare BMI
function compareBMI(p1, p2) {
  const bmi1 = p1.calcBMI();
  const bmi2 = p2.calcBMI();

  if (bmi1 > bmi2) {
    console.log(
      `${p1.fullName} has a higher BMI (${bmi1.toFixed(2)}) than ${
        p2.fullName
      } (${bmi2.toFixed(2)})`
    );
  } else if (bmi2 > bmi1) {
    console.log(
      `${p2.fullName} has a higher BMI (${bmi2.toFixed(2)}) than ${
        p1.fullName
      } (${bmi1.toFixed(2)})`
    );
  } else {
    console.log(
      `${p1.fullName} and ${p2.fullName} have the same BMI (${bmi1.toFixed(2)})`
    );
  }
}

// Test
compareBMI(person1, person2);

// Exercise 2: Grade Average

function findAvg(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  let avg = sum / gradesList.length;
  console.log("Average:", avg.toFixed(2));

  if (avg >= 65) {
    console.log("Congratulations! You passed.");
  } else {
    console.log("You failed. You must repeat the course.");
  }
}

const grades = [70, 60, 85, 90];
findAvg(grades);
