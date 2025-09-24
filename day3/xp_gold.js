// 🌟 Exercise 1: Select a kind of Music

const genres = document.getElementById("genres");

// Display the value of the selected option
console.log("Selected genre:", genres.value);

// Add a new option "Classic" and select it by default
const classicOption = document.createElement("option");
classicOption.value = "classic";
classicOption.textContent = "Classic";
classicOption.selected = true;
genres.appendChild(classicOption);

console.log("New selected genre:", genres.value);

// 🌟 Exercise 2: Delete colors

function removecolor() {
  const colorSelect = document.getElementById("colorSelect");
  const selectedIndex = colorSelect.selectedIndex;
  if (selectedIndex >= 0) {
    colorSelect.remove(selectedIndex);
  }
}

// Attach event listener to the button
const removeBtn = document.querySelector('input[type="button"]');
removeBtn.addEventListener("click", removecolor);

// 🌟 Exercise 3: Create a shopping list

let shoppingList = [];
const root = document.getElementById("root");

// Create form
const form = document.createElement("form");
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter item";
const addButton = document.createElement("button");
addButton.type = "button";
addButton.textContent = "AddItem";

form.appendChild(input);
form.appendChild(addButton);
root.appendChild(form);

// Create ClearAll button
const clearButton = document.createElement("button");
clearButton.type = "button";
clearButton.textContent = "ClearAll";
root.appendChild(clearButton);

// Create <ul> to display items
const ul = document.createElement("ul");
root.appendChild(ul);

// Function to add item
function addItem() {
  const value = input.value.trim();
  if (value) {
    shoppingList.push(value);

    const li = document.createElement("li");
    li.textContent = value;
    ul.appendChild(li);

    input.value = "";
  }
}

// Function to clear all items
function clearAll() {
  shoppingList = [];
  ul.innerHTML = "";
}

// Event listeners
addButton.addEventListener("click", addItem);
clearButton.addEventListener("click", clearAll);
