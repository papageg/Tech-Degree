// FSJS - Random Quote Generator
//The object literal array that holds all 5 or more quotes.
// Create the array of quote objects and name it quotes
let red;
let blue;
let green;

let quotes = [
  {
    quote:"Don't cry because it's over, smile because it happened.",
    name:"Dr. Seuss",
    category:"happiness, joy, life, optimism, sadness, smile, smiling",
  },
  {
    quote:"Be yourself; everyone else is already taken.",
    name:"Oscar Wilde",
    category:"be yourself, honesty, inspirational",
  },
  {
    quote:"Anyone who has never made a mistake has never tried anything new.",
    name:"Albert Einstein",
    category:"mistakes",
  },
  {
    quote:"It takes courage to grow up and become who you really are.",
    name:"E.E. Cummings",
    category:"courage",
  },
  {
    quote:"Never underestimate the power of stupid people in large groups.",
    name:"George Carlin",
    category:"human-nature, humor, misattributed-george-carlin, stupidity",
  },
  {
    quote:"If you're afraid of butter, use cream.",
    name:"Julia Child",
    category:"cholesterol, food",
  },
  {
    quote:"Anyone can find the switch after the lights are on.",
    name:"Confucius",
    category:"Philosopher",
  }
];
/*
  GOT ALL THE QUOTES FROM
  https://www.goodreads.com/quotes/tag/attributed-no-source?page=1
*/
//END OF QUOTES


// Created the getRandomQuote function and named it getRandomQuote.
function getRandomQuote() {
  let quo = Math.floor(Math.random() * quotes.length);
  let ranQuo = quotes[quo];
  return ranQuo;
}
//getRandomQuote creates a function that gets random number and selects a quote then returns the quote to the function.


// Created the printQuote funtion and named it printQuote.
function printQuote() {
  let getQuote = getRandomQuote();
  let sendHtml = '<p class="quote">'+ getQuote.quote +'</p>';
  sendHtml += '<p class="source">'+ getQuote.name + '</p>';
  sendHtml += '<p class="catagor">'+ getQuote.category + '</p>';
  document.getElementById("quote-box").innerHTML = sendHtml;
}
/* printQuote function will use the getRandomQuote function and add
it the the paragrah with the class of quote and the name to the source class
then adding the category.

*/
// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
