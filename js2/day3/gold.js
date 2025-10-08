// Exercise 1: printFullName
function printFullName({ first, last }) {
  return `Your full name is ${first} ${last}`;
}

console.log("Exercise 1:", printFullName({ first: "Elie", last: "Schoppik" }));
// Output: Your full name is Elie Schoppik

// Exercise 2: keys and values
function keysAndValues(obj) {
  const sortedKeys = Object.keys(obj).sort();
  const values = sortedKeys.map((key) => obj[key]);
  return [sortedKeys, values];
}

console.log("Exercise 2 - example1:", keysAndValues({ a: 1, b: 2, c: 3 }));
// Output: [["a", "b", "c"], [1, 2, 3]]

console.log(
  "Exercise 2 - example2:",
  keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
);
// Output: [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

console.log(
  "Exercise 2 - example3:",
  keysAndValues({ key1: true, key2: false, key3: undefined })
);
// Output: [["key1", "key2", "key3"], [true, false, undefined]]

// Exercise 3: Counter class
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne; // reference to the same object
counterTwo.increment();

console.log("Exercise 3:", counterOne.count);
// Output: 3
