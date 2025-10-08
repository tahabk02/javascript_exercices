// Exercise 1: Location
const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `Exercise 1: I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);
// Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info
function displayStudentInfo({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

console.log(
  "Exercise 2:",
  displayStudentInfo({ first: "Elie", last: "Schoppik" })
);
// Output: Your full name is Elie Schoppik

// Exercise 3: Users object to array
const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1: Turn into array
const usersArray = Object.entries(users);
console.log("Exercise 3 - part1:", usersArray);
// Output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

// Part 2: Multiply IDs by 2
const usersArrayDoubled = usersArray.map(([user, id]) => [user, id * 2]);
console.log("Exercise 3 - part2:", usersArrayDoubled);
// Output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// Exercise 4: Person class
class Person {
  constructor(name) {
    this.name = name;
  }
}
const member = new Person("John");
console.log("Exercise 4:", typeof member);
// Output: object

// Exercise 5: Dog class extension
class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Correct way to extend Dog
class Labrador extends Dog {
  constructor(name, size) {
    super(name); // must call super() before using 'this'
    this.size = size;
  }
}

// Exercise 6: Challenges

// Part 1: Compare arrays and objects
console.log("[2] === [2]", [2] === [2]); // false
console.log("{} === {}", {} === {}); // false

// Part 2: Object references
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log("object2.number:", object2.number); // 4
console.log("object3.number:", object3.number); // 4
console.log("object4.number:", object4.number); // 5

// Part 3: Classes Animal and Mammal
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(animalSound) {
    return `${animalSound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// Part 4: farmerCow instance
const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log("Exercise 6 - farmerCow:", farmerCow.sound("Moooo"));
// Output: Moooo I'm a cow, named Lily and I'm brown and white
