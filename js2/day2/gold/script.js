const output = document.getElementById("output");
const runBtn = document.getElementById("run");

function show(title, value) {
  const card = document.createElement("div");
  card.className = "card";
  const h = document.createElement("strong");
  h.textContent = title;
  const pre = document.createElement("code");
  pre.textContent =
    typeof value === "string" ? value : JSON.stringify(value, null, 2);
  card.appendChild(h);
  card.appendChild(pre);
  output.appendChild(card);
}

function clearOutput() {
  output.innerHTML = "";
}

function runAll() {
  clearOutput();

  // Exercise 1: map
  const mapResult = [1, 2, 3].map((num) =>
    typeof num === "number" ? num * 2 : undefined
  );
  console.log("Exercise 1:", mapResult);
  show("Exercise 1 - map", mapResult);

  // Exercise 2: reduce
  const reduceResult = [
    [0, 1],
    [2, 3],
  ].reduce((acc, cur) => acc.concat(cur), [1, 2]);
  console.log("Exercise 2:", reduceResult);
  show("Exercise 2 - reduce", reduceResult);

  // Exercise 3: map with index
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
    console.log("Exercise 3 - num, index:", num, i);
    return num * 2;
  });
  console.log("Exercise 3:", newArray);
  show("Exercise 3 - map with index", newArray);

  // Exercise 4: Nested arrays
  const array = [[1], [2], [3], [[[4]]], [[[5]]]];
  const flatArray = array.flat(2);
  console.log("Exercise 4 - flatArray:", flatArray);
  show("Exercise 4 - flat(2)", flatArray);

  const greeting = [
    ["Hello", "young", "grasshopper!"],
    ["you", "are"],
    ["learning", "fast!"],
  ];
  const joinedGreeting = greeting.map((arr) => arr.join(" "));
  console.log("Exercise 4 - joinedGreeting:", joinedGreeting);
  show("Exercise 4 - joinedGreeting", joinedGreeting);

  const greetingString = joinedGreeting.join(" ");
  console.log("Exercise 4 - greetingString:", greetingString);
  show("Exercise 4 - greetingString", greetingString);

  const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
  const freed = trapped.flat(Infinity);
  console.log("Exercise 4 - freed trapped:", freed);
  show("Exercise 4 - freed trapped", freed);
}

runBtn.addEventListener("click", runAll);
runAll();
