// FSJS - Random Quote Generator
//The object literal array that holds all 5 or more quotes.
// Create the array of quote objects and name it quotes
let quotes = [
  {
    quote:"“Don't cry because it's over, smile because it happened.”",
    name:"Dr. Seuss",
    category:"attributed-no-source, cry, crying, experience, happiness, joy, life, misattributed-dr-seuss, optimism, sadness, smile, smiling",
  },
  {
    quote:"“Be yourself; everyone else is already taken.”",
    name:"Oscar Wilde",
    category:"attributed-no-source, be-yourself, honesty, inspirational, misattributed-oscar-wilde",
  },
  {
    quote:"“Anyone who has never made a mistake has never tried anything new.”",
    name:"Albert Einstein",
    category:"attributed-no-source, mistakes 16554 likes Like",
  },
  {
    quote:"“It takes courage to grow up and become who you really are.”",
    name:"E.E. Cummings",
    category:"attributed-no-source, courage",
  },
  {
    quote:"“Never underestimate the power of stupid people in large groups.”",
    name:"George Carlin",
    category:"attributed-no-source, human-nature, humor, misattributed-george-carlin, stupidity",
  },
  {
    quote:"“If you're afraid of butter, use cream.”",
    name:"Julia Child",
    category:"attributed-no-source, cholesterol, food",
  },
  {
    quote:"“Anyone can find the switch after the lights are on.”",
    name:"Confucius",
    category:"attributed-no-source",
  }
];
/*
  GOT ALL THE QUOTES FROM https://www.goodreads.com/quotes/tag/attributed-no-source?page=1
*/
//END OF QUOTES


// Create the getRandomQuote function and name it getRandomQuote
function getRandomQuote (quo) {
  let random_quote = [];
  for (i = 0; i < quo.length; i += 1){

  }
}


// Create the printQuote funtion and name it printQuote
function printQuote () {
  let print_quote = [];
  for (i = 0; i < print_quote.length; i += 1){

  }
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
