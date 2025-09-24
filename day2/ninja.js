// Exercise 1: Random Number
const randomNumber = Math.floor(Math.random() * 100) + 1;
for (let i = 0; i <= randomNumber; i++) {
  if (i % 2 === 0) console.log(i);
}

// Exercise 2: Capitalized letters
function capitalize(str) {
  let evenCaps = "";
  let oddCaps = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenCaps += str[i].toUpperCase();
      oddCaps += str[i];
    } else {
      evenCaps += str[i];
      oddCaps += str[i].toUpperCase();
    }
  }
  return [evenCaps, oddCaps];
}

// Exercise 3: Is palindrome?
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Exercise 4: Biggest Number in Array
function biggestNumberInArray(array) {
  let max = 0;
  for (let item of array) {
    if (!isNaN(item) && item > max) max = item;
  }
  return max;
}

// Exercise 5: Unique Elements
function uniqueElements(arr) {
  return [...new Set(arr)];
}

// Exercise 6: Calendar
function createCalendar(year, month) {
  const weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");
  weekdays.forEach((day) => {
    const th = document.createElement("th");
    th.textContent = day;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  let dayCounter = 1;
  for (let i = 0; dayCounter <= daysInMonth; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const td = document.createElement("td");
      let adjustedFirstDay = (firstDay + 6) % 7;
      if (i === 0 && j < adjustedFirstDay) td.textContent = ".";
      else if (dayCounter <= daysInMonth) {
        td.textContent = dayCounter;
        dayCounter++;
      } else td.textContent = ".";
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  document.body.appendChild(table);
}
