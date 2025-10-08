// Exercise 1: Dog age to human years
const data = [
  { name: "Butters", age: 3, type: "dog" },
  { name: "Cuty", age: 5, type: "rabbit" },
  { name: "Lizzy", age: 6, type: "dog" },
  { name: "Red", age: 1, type: "cat" },
  { name: "Joey", age: 3, type: "dog" },
  { name: "Rex", age: 10, type: "dog" },
];

// Using a loop
let sumDogYearsLoop = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].type === "dog") {
    sumDogYearsLoop += data[i].age * 7;
  }
}
console.log("Exercise 1 - loop:", sumDogYearsLoop);

// Using reduce
const sumDogYearsReduce = data
  .filter((d) => d.type === "dog")
  .reduce((acc, dog) => acc + dog.age * 7, 0);
console.log("Exercise 1 - reduce:", sumDogYearsReduce);

// Exercise 2: Clean email
const userEmail3 = " cannotfillemailformcorrectly@gmail.com ";
const cleanedEmail = userEmail3.trim();
console.log("Exercise 2 - cleaned email:", cleanedEmail);

// Exercise 3: Users full name as key
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

const usersObj = {};
users.forEach((u) => {
  usersObj[`${u.firstName} ${u.lastName}`] = u.role;
});
console.log("Exercise 3 - users object:", usersObj);

// Exercise 4: Array to object
const letters = ["x", "y", "z", "z"];

// Using for loop
const lettersObjLoop = {};
for (let i = 0; i < letters.length; i++) {
  lettersObjLoop[letters[i]] = lettersObjLoop[letters[i]]
    ? lettersObjLoop[letters[i]] + 1
    : 1;
}
console.log("Exercise 4 - for loop:", lettersObjLoop);

// Using reduce
const lettersObjReduce = letters.reduce((acc, l) => {
  acc[l] = acc[l] ? acc[l] + 1 : 1;
  return acc;
}, {});
console.log("Exercise 4 - reduce:", lettersObjReduce);
