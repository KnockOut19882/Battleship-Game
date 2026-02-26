// Variables
let randomLoc = Math.floor(Math.random() * 5);

const location1 = randomLoc;
const location2 = location1 +1;
const location3 = location2 +1;

let battleship = [location1, location2, location3];
let previousGuesses = [];


let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

// Game Logic

while (!isSunk) { // while isSunk is false, keep asking the user for a guess  
  guess = Number(prompt('Ready, aim, fire! (Enter a number from 0-6):')); // prompt returns a string, so we need to convert it to a number using Number()
  if (guess < 0 || guess > 6 || isNaN(guess)) { //here we check if the guess is a valid number between 0 and 6, and also check if it's not NaN (Not a Number)
    alert('Please enter a valid number!');
    continue; // if the guess is not valid, we skip the rest of the loop and ask for another guess
  }
  guesses++; // guesses = guesses + 1;
  if (previousGuesses.includes(guess)) { // here we check if the guess has already been made using the includes() method on the previousGuesses array
    alert('You already guessed that location!');
    continue; // if the guess has already been made, we skip the rest of the loop and ask for another guess
  }
  previousGuesses.push(guess); // add the guess to the previousGuesses array
  if (battleship.includes(guess)) { // here we check if the guess is in the battleship array using the includes() method and also make sure it's not a previous guess
     alert('HIT!'); 
    hits++; // hits = hits + 1;
    battleship = battleship.filter((location) => location !== guess); // here we remove the hit location from the battleship array using the filter() method, so that it won't be counted as a hit again
    if (battleship.length === 0) { // if the battleship array is empty, it means all locations have been hit, so we set isSunk to true
      isSunk = true;
      alert('You sunk my battleship!');
    }
  } else {
      alert('MISS');
}
}


let stats =
  'You took ' +
  guesses +
  ' guesses to sink the battleship, ' +
  'which means your shooting accuracy was ' +
  (100 * hits / guesses).toFixed(0) + '%';

alert(stats);
