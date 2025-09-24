// Exercise 1: Change the article
// Retrieve h1 and console.log
const h1 = document.querySelector("article h1");
console.log(h1);

// Remove the last paragraph
const article = document.querySelector("article");
article.removeChild(article.lastElementChild);

// Change background color of h2 on click
const h2 = document.querySelector("article h2");
h2.addEventListener("click", () => {
  h2.style.backgroundColor = "red";
});

// Hide h3 on click
const h3 = document.querySelector("article h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

// Button to make all paragraphs bold
const button = document.createElement("button");
button.textContent = "Make paragraphs bold";
document.body.appendChild(button);
button.addEventListener("click", () => {
  const paragraphs = document.querySelectorAll("article p");
  paragraphs.forEach((p) => (p.style.fontWeight = "bold"));
});

// BONUS: Random font size on h1 hover
h1.addEventListener("mouseover", () => {
  const size = Math.floor(Math.random() * 101); // 0-100 px
  h1.style.fontSize = size + "px";
});

// Exercise 2: Work with forms
const form = document.querySelector("form");
console.log(form);

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
console.log(fname, lname);

const fnameByName = document.querySelector('input[name="firstname"]');
const lnameByName = document.querySelector('input[name="lastname"]');
console.log(fnameByName, lnameByName);

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents page reload
  const ul = document.querySelector(".usersAnswer");
  ul.innerHTML = ""; // clear previous
  if (fname.value) {
    const li1 = document.createElement("li");
    li1.textContent = fname.value;
    ul.appendChild(li1);
  }
  if (lname.value) {
    const li2 = document.createElement("li");
    li2.textContent = lname.value;
    ul.appendChild(li2);
  }
});

// Exercise 3: Transform the sentence
let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("p strong");
}
getBoldItems();

function highlight() {
  allBoldItems.forEach((item) => (item.style.color = "blue"));
}

function returnItemsToDefault() {
  allBoldItems.forEach((item) => (item.style.color = "black"));
}

const p = document.querySelector("p");
p.addEventListener("mouseover", highlight);
p.addEventListener("mouseout", returnItemsToDefault);

// Exercise 4: Volume of a sphere
const myForm = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const volumeInput = document.getElementById("volume");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const r = parseFloat(radiusInput.value);
  if (!isNaN(r)) {
    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    volumeInput.value = volume.toFixed(2);
  } else {
    alert("Please enter a valid number for radius");
  }
});
