var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-so-far");

var numWins = 0;
var numLosses = 0;
var numGuessesLeft = 10;
var arrGuessesSoFar = [];
var computerGuess = [];

var name = prompt('What is your name?');
alert("Hi" + " " + name + "!" + " " + "Are you ready?");
winsText.textContent = numWins;
lossesText.textContent = numLosses;
guessesLeft.textContent = numGuessesLeft;
guessesSoFar.textContent = arrGuessesSoFar;

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


document.onkeyup = function(event) {

  var userGuess = event.key; 

  if (computerGuess === userGuess) {
     increaseAndUpdateNumWins();
     alert("You won!");
     resetGame();
  }
  else {
      guessesSoFar.textContent = guessesSoFar.textContent + " " + userGuess;
      decreaseGuessesLeft();
      setTimeout(checkGuessesLeft, 1000);
    }

}

function checkGuessesLeft(){
    if (numGuessesLeft <= 0){
        alert("You lost!");
        numLosses++;
        lossesText.textContent = numLosses;
        resetGame();
        
    }
}

function increaseAndUpdateNumWins(){
    numWins += 1; 
    winsText.textContent = numWins;
}

function setComputerGuess(){
  computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function decreaseGuessesLeft(){
    numGuessesLeft -= 1;
    guessesLeft.textContent = numGuessesLeft;
}


function resetGame(){
    numGuessesLeft = 10;
    arrGuessesSoFar = [];
    guessesLeft.textContent = numGuessesLeft;
    guessesSoFar.textContent = [];
}
