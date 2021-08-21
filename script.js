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

const generateQuote = async () => {
  //   console.log("generating quote...");
  let quote = "";
  let author = "";
  const category = randomizeCategory();
  const URL = `https://quotes.rest/qod.json?language=en&category=${category}`;
  //   wait till API fetch is completed
  await fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      quote = data.contents.quotes[0].quote;
      author = data.contents.quotes[0].author;
    })
    .catch((err) => console.error(err));
  console.log(quote);

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
};
