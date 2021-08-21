# random-quote-generator
A simple random quote generator using free API from [TheySaidSo](https://theysaidso.com/). 

The website is responisve and can be viewed on smaller screens.

## Experience the website
View the site [here](https://suspicious-nobel-b9f6e7.netlify.app/).

## What have I used?
- HTML
- CSS
- JavaScript with Fetch API

## Working
1. When the page loads for the first time or when the *Generate Quote* button is clicked, a JavaScript function is called. 

2. Inside that function is another function call to a randomizer function to get the category of the Quote of the Day. 
The categories are stored as an array of strings which is accessed using a random index using `Math.floor(Math.random() * categories.length)`. 
The randomized category is passed as a parameter in the URL of the request.

3. The GET request is performed using the Fetch API. 
First, a promise is received as the response which is then parsed as JSON using `response.json()`.
Then relevant data is extracted from the parsed response and stored inside variables for further use.

4. Finally, the HTML is manipulated by changing the contents of the elements.
