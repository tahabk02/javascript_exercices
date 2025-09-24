// Exercise 1: Numbers divisible by 23

const displayNumbersDivisible = (divisor = 23) => {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("Sum:", sum);
};

displayNumbersDivisible(); // default 23
displayNumbersDivisible(3);
displayNumbersDivisible(45);

// Exercise 2: Shopping List
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;
  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item]--; // decrease stock
    }
  }
  return total;
}

console.log("Total bill:", myBill());
console.log("Updated stock:", stock);

function changeEnough(itemPrice, amountOfChange) {
  const [quarters, dimes, nickels, pennies] = amountOfChange;
  const total = quarters * 0.25 + dimes * 0.1 + nickels * 0.05 + pennies * 0.01;
  return total >= itemPrice;
}

// Examples
console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

// Exercise 4: Vacation Costs
function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  if (destination.toLowerCase() === "london") return 183;
  if (destination.toLowerCase() === "paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) cost *= 0.95; // 5% discount
  return cost;
}

function totalVacationCost() {
  let nights = Number(prompt("How many nights at the hotel?"));
  let destination = prompt("Where do you want to go?");
  let days = Number(prompt("How many days for the rental car?"));

  let hotel = hotelCost(nights);
  let plane = planeRideCost(destination);
  let car = rentalCarCost(days);

  console.log(
    `The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`
  );
  return hotel + plane + car;
}

console.log("Total vacation cost:", totalVacationCost());

// Exercise 5: Users (DOM Manipulation)
const container = document.getElementById("container");
console.log(container);

const ulList = document.querySelectorAll("ul.list");
ulList[0].children[1].textContent = "Richard";

ulList[1].children[1].remove();

ulList.forEach((ul) => (ul.children[0].textContent = "Taha"));

ulList.forEach((ul) => ul.classList.add("student_list"));

ulList[0].classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

ulList[0].querySelector("li:last-child").style.display = "none";

ulList[0].querySelector("li:nth-child(2)").style.border = "2px solid black";

document.body.style.fontSize = "18px";

if (container.style.backgroundColor === "lightblue") {
  alert(
    `Hello ${ulList[0].children[0].textContent} and ${ulList[0].children[1].textContent}`
  );
}

// Exercise 6: Change the Navbar
const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

const ul = nav.querySelector("ul");
const newLi = document.createElement("li");
const text = document.createTextNode("Logout");
newLi.appendChild(text);
ul.appendChild(newLi);

console.log("First li:", ul.firstElementChild.textContent);
console.log("Last li:", ul.lastElementChild.textContent);

// Exercise 7: My Book List
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg",
    alreadyRead: true,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
    alreadyRead: false,
  },
];

const section = document.querySelector(".listBooks");

allBooks.forEach((book) => {
  const div = document.createElement("div");
  const title = document.createElement("p");
  title.textContent = `${book.title} written by ${book.author}`;

  if (book.alreadyRead) title.style.color = "red";

  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  div.appendChild(title);
  div.appendChild(img);
  section.appendChild(div);
});
