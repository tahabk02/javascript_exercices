// Quotes Array
let quotes = [
  {
    id: 0,
    author: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    likes: 0,
  },
  { id: 1, author: "Yoda", quote: "Do or do not. There is no try.", likes: 0 },
  {
    id: 2,
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
    likes: 0,
  },
];

let lastQuoteId = -1;
const quoteDisplay = document.getElementById("quoteDisplay");

// Generate Random Quote
function generateQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastQuoteId);

  lastQuoteId = randomIndex;
  displayQuote(quotes[randomIndex]);
}

function displayQuote(quoteObj) {
  quoteDisplay.innerHTML = `<p>"${quoteObj.quote}"</p><p>- ${quoteObj.author}</p><p>Likes: ${quoteObj.likes}</p>`;
}

// Event Listener
document
  .getElementById("generateQuoteBtn")
  .addEventListener("click", generateQuote);

// Add New Quote
document.getElementById("addQuoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const quoteText = document.getElementById("newQuote").value.trim();
  const authorText = document.getElementById("newAuthor").value.trim();
  const newId = quotes.length ? quotes[quotes.length - 1].id + 1 : 0;

  quotes.push({ id: newId, author: authorText, quote: quoteText, likes: 0 });
  document.getElementById("addQuoteForm").reset();
  alert("Quote added!");
});

// Quote Stats Buttons
document.getElementById("charWithSpaces").addEventListener("click", () => {
  if (lastQuoteId !== -1) alert(quotes[lastQuoteId].quote.length);
});
document.getElementById("charWithoutSpaces").addEventListener("click", () => {
  if (lastQuoteId !== -1)
    alert(quotes[lastQuoteId].quote.replace(/\s/g, "").length);
});
document.getElementById("wordCount").addEventListener("click", () => {
  if (lastQuoteId !== -1) alert(quotes[lastQuoteId].quote.split(" ").length);
});
document.getElementById("likeQuote").addEventListener("click", () => {
  if (lastQuoteId !== -1) {
    quotes[lastQuoteId].likes++;
    displayQuote(quotes[lastQuoteId]);
  }
});

// Filter by Author
let filteredQuotes = [];
let currentIndex = 0;
const filteredDisplay = document.getElementById("filteredQuoteDisplay");

document.getElementById("filterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document
    .getElementById("filterAuthor")
    .value.trim()
    .toLowerCase();
  filteredQuotes = quotes.filter((q) => q.author.toLowerCase() === author);
  currentIndex = 0;
  showFilteredQuote();
});

function showFilteredQuote() {
  if (filteredQuotes.length === 0) {
    filteredDisplay.innerHTML = "<p>No quotes found for this author.</p>";
  } else {
    const q = filteredQuotes[currentIndex];
    filteredDisplay.innerHTML = `<p>"${q.quote}"</p><p>- ${q.author}</p>
                                   <p>Likes: ${q.likes}</p>
                                   <button id="prevQuote">Previous</button>
                                   <button id="nextQuote">Next</button>`;
    document.getElementById("prevQuote").addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
      showFilteredQuote();
    });
    document.getElementById("nextQuote").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % filteredQuotes.length;
      showFilteredQuote();
    });
  }
}
