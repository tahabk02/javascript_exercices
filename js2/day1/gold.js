// 🌟 Exercise 1 : Nested functions

const landscape = () => {
  let result = "";

  const flat = (x) => {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };

  const mountain = (x) => {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

landscape();

// 🌟 Exercise 2 : Closure

const addTo = (x) => (y) => x + y;
const addToTen = addTo(10);
addToTen(3);

// 🌟 Exercise 3 : Currying

const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);

// 🌟 Exercise 4 : Currying

const curriedSum2 = (a) => (b) => a + b;
const add5 = curriedSum2(5);
add5(12);

// 🌟 Exercise 5 : Composing

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5b = (num) => num + 5;
compose(add1, add5b)(10);
