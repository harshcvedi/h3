const quoteList = document.getElementById("quote-list");
const allQuotesBtn = document.getElementById("all-quotes");
const newQuoteBtn = document.getElementById("new-quote");
const quoteForm = document.getElementById("quote-form");

const quotes = [
  { author: "Bhoomika", quote: "I am the best" },
  { author: "Purnima", quote: "I am the 2nd best" }
]; 

const showAllQuotes = () => {
  quoteList.innerHTML = "";

  quotes.forEach((q) => {
    const quoteElement = document.createElement("div");
    quoteElement.classList.add("quote");
    quoteElement.innerHTML = `
      <p class="quote-text">${q.quote}</p>
      <p class="quote-author">- ${q.author}</p>
      <button class="view-full" onclick="viewFullQuote('${q.author}', '${q.quote}')">View Full Quote</button>
    `;
    quoteList.appendChild(quoteElement);
  });
};

const viewFullQuote = (author, quote) => {
    
      document.querySelector("h1").style.display = "none";
  
      const fullQuoteElement = document.createElement("div");
      fullQuoteElement.classList.add("full-quote");
      fullQuoteElement.innerHTML = `
         <h3>${author}</h3>
      
        <p>${quote}</p>
        <button onclick="goBack()">Go Back</button>
      `;
  
      quoteList.innerHTML = "";
      quoteList.appendChild(fullQuoteElement);
};

const goBack = () => {
    showAllQuotes();
    document.querySelector("h1").style.display = "block";
};

allQuotesBtn.addEventListener("click", () => {
  showAllQuotes();
  quoteForm.style.display = "none";
  quoteList.style.display = "block";
});

newQuoteBtn.addEventListener("click", () => {
  quoteForm.style.display = "block";
  quoteList.style.display = "none";
});

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const authorInput = document.getElementById("author");
  const quoteInput = document.getElementById("quote");

  const author = authorInput.value;
  const quote = quoteInput.value;

  if (author && quote) {
    quotes.push({ author, quote });

    authorInput.value = "";
    quoteInput.value = "";
    quoteForm.style.display = "none";
    quoteList.style.display = "block";
    showAllQuotes();
  }
});


showAllQuotes();
newQuoteBtn.addEventListener("click", () => {
  // Show the quote form and hide the quote list
  quoteForm.style.display = "block";
  quoteList.style.display = "none";

  // Remove the "All Quotes" heading
  document.querySelector("h1").style.display = "none";
});
