// Display a random quote when page loads for first time
window.onload = function () {
  generateQuote();
};

// random categories of quotes required for API call
const randomizeCategory = () => {
  const categories = [
    "inspire",
    "management",
    "sports",
    "life",
    "funny",
    "love",
    "art",
    "students",
  ];
  const random_index = Math.floor(Math.random() * categories.length);
  return categories[random_index];
};

// generate a quote from a random category
const generateQuote = async () => {
  let quote = "";
  let author = "";
  const category = randomizeCategory();
  const URL = `https://quotes.rest/qod.json?language=en&category=${category}`;

  // fetch a quote using the fetch API GET request
  // wait till API fetch is completed
  await fetch(URL)
    .then((res) => res.json()) // promise received
    .then((data) => {
      quote = data.contents.quotes[0].quote;
      author = data.contents.quotes[0].author;
    })
    .catch((err) => console.error(err));

  // modify HTML elements with new data
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
};
