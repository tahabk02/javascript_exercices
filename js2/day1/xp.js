// 🌟 Exercise 1 : Scope

function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}
funcOne();

let a = 0;
function funcTwo() {
  a = 5;
}
function funcThree() {
  alert(`inside the funcThree function ${a}`);
}
funcThree();
funcTwo();
funcThree();

function funcFour() {
  window.a = "hello";
}
function funcFive() {
  alert(`inside the funcFive function ${a}`);
}
funcFour();
funcFive();

let b = 1;
function funcSix() {
  let b = "test";
  alert(`inside the funcSix function ${b}`);
}
funcSix();

let c = 2;
if (true) {
  let c = 5;
  alert(`in the if block ${c}`);
}
alert(`outside of the if block ${c}`);

// 🌟 Exercise 2 : Ternary operator

const winBattle = () => true;
let experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

// 🌟 Exercise 3 : Is it a string ?

const isString = (value) => typeof value === "string";
console.log(isString("hello"));
console.log(isString([1, 2, 4, 0]));

// 🌟 Exercise 4 : Find the sum

const sum = (a, b) => a + b;
console.log(sum(5, 10));

// 🌟 Exercise 5 : Kg and grams

function kgToGrams1(kg) {
  return kg * 1000;
}
console.log(kgToGrams1(2));

const kgToGrams2 = function (kg) {
  return kg * 1000;
};
console.log(kgToGrams2(3));

const kgToGrams3 = (kg) => kg * 1000;
console.log(kgToGrams3(4));

// 🌟 Exercise 6 : Fortune teller

(function (children, partner, location, job) {
  const div = document.createElement("div");
  div.textContent = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
  document.body.appendChild(div);
})(3, "Sara", "Paris", "Developer");

// 🌟 Exercise 7 : Welcome

(function (userName) {
  const navbar = document.createElement("div");
  navbar.classList.add("navbar");
  const userDiv = document.createElement("div");
  userDiv.innerHTML = `<img src="https://i.pravatar.cc/40" style="border-radius:50%; margin-right:8px;"><span>${userName}</span>`;
  navbar.appendChild(userDiv);
  document.body.prepend(navbar);
})("John");

// 🌟 Exercise 8 : Juice Bar

function makeJuice(size) {
  const ingredients = [];
  function addIngredients(i1, i2, i3) {
    ingredients.push(i1, i2, i3);
  }
  function displayJuice() {
    const div = document.createElement("div");
    div.textContent = `The client wants a ${size} juice, containing ${ingredients.join(
      ", "
    )}.`;
    document.body.appendChild(div);
  }
  addIngredients("apple", "banana", "orange");
  addIngredients("mango", "kiwi", "strawberry");
  displayJuice();
}
makeJuice("large");
