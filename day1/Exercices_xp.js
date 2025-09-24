// ===========Exercise 1: List of People

let people = ["Greg", "Mary", "Devon", "James"];

// 1. Remove "Greg"
people.shift();

// 2. Replace "James" with "Jason"
people[people.indexOf("James")] = "Jason";

// 3. Add your name to the end
people.push("Taha");

// 4. Console.log Mary's index
console.log(people.indexOf("Mary"));

// 5. Make a copy without "Mary" and your name
let copyPeople = people.slice(1, people.length - 1);

// 6. Index of "Foo"
console.log(people.indexOf("Foo"));

// 7. Last element
let last = people[people.length - 1];
console.log(last);

// Part II - Loops
// 1. Log each person
for (let person of people) {
  console.log(person);
}

// 2. Exit after "Devon"
for (let person of people) {
  console.log(person);
  if (person === "Devon") break;
}

// =========Exercise 2: Your Favorite Colors
const colors = ["blue", "red", "green", "yellow", "purple"];

// Normal loop
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

// Bonus with suffix
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

// =============Exercise 3: Repeat the Question
let number = Number(prompt("Enter a number"));

while (number < 10) {
  number = Number(prompt("Enter a number again (must be 10 or more)"));
}

// Exercise 4: Building Management
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// Number of floors
console.log(building.numberOfFloors); // 4

// Apartments on 1st and 3rd floor
console.log(
  building.numberOfAptByFloor.firstFloor +
    building.numberOfAptByFloor.thirdFloor
); // 12

// Second tenant and rooms
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]); // Dan 4

// Check rent sum
if (
  building.numberOfRoomsAndRent.sarah[1] +
    building.numberOfRoomsAndRent.david[1] >
  building.numberOfRoomsAndRent.dan[1]
) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]); // 1200

// Exercise 5: Family
const family = {
  father: "John",
  mother: "Jane",
  sister: "Anna",
  brother: "Mark",
};

// Log keys
for (let key in family) {
  console.log(key);
}

// Log values
for (let key in family) {
  console.log(family[key]);
}

// Exercise 6: Rudolf
const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};

let sentence = "";
for (let key in details) {
  sentence += key + " " + details[key] + " ";
}
console.log(sentence.trim());

// Exercise 7: Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let firstLetters = names.map((name) => name[0]);
firstLetters.sort();
let secretName = firstLetters.join("");
console.log(secretName);
