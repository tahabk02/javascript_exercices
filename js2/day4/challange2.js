function allTruthy(...args) {
  // every() method returns true if all elements pass the test
  return args.every(Boolean);
}

// Test examples
console.log(allTruthy(true, true, true)); // true
console.log(allTruthy(true, false, true)); // false
console.log(allTruthy(5, 4, 3, 2, 1, 0)); // false
console.log(allTruthy("a", 1, {}, [])); // true
console.log(allTruthy("hello", null)); // false
