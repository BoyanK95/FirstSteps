//Selecting the Variables

const btn = document.getElementById("new-quote");
const quote = document.querySelector(".quote");
const person = document.querySelector(".person");

const quotes = [
  {
    quote: `"Not all those who wander are lost"`,
    person: `J. R. R. Tolkein`,
  },
  {
    quote: `"I think therefore I am"`,
    person: `Rene Descartes`,
  },
  {
    quote: `"Too many people spend money they earned..to buy things they don't want..to impress people that they don't like."`,
    person: `Will Rogers`,
  },
  {
    quote: `"I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy."`,
    person: `Warren Buffett`,
  },
  {
    quote: `"Speak softly and carry a big stick"`,
    person: `Theodore Roosevelt`,
  },
  {
    quote: `"You must be the change you wish to see in the world"`,
    person: `Mahatma Ghandi`,
  },
  {
    quote: `"What doesn't kill us makes us stronger"`,
    person: `Friedrich Nietzsche`,
  },
  {
    quote: `"He travels the fastest who travels alone."`,
    person: `Rudyard Kipling`,
  },
  {
    quote: `"All that glitters is not gold."`,
    person: `William Shakespeare`,
  },
  {
    quote: `"Opportunity is missed by most people because it is dressed in overalls and looks like work."`,
    person: `Thomas Edison`,
  },
];

btn.addEventListener("click", function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
