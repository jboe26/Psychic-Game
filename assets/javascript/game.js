// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var wins = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guessesSoFar = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var GuessesLeftText = document.getElementById("guesses-left-text");
var GuessesSoFarText = document.getElementById("guesses-so-far-text");

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * wins.length)];

    // Reworked our code from last step to use "else if" instead of lots of if statements.

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c")) ((userGuess === "d") || (userGuess === "e") || (userGuess === "f"))
    ((userGuess === "g") || (userGuess === "h") || (userGuess === "i")) ((userGuess === "j") || (userGuess === "k") || (userGuess === "l")) 
    ((userGuess === "m") || (userGuess === "n") || (userGuess === "o")) ((userGuess === "p") || (userGuess === "q") || (userGuess === "r")) 
    ((userGuess === "s") || (userGuess === "t") || (userGuess === "u")) ((userGuess === "v") || (userGuess === "w") || (userGuess === "x"))
    ((userGuess === "y") || (userGuess === "z")); {

        if ((userGuess === "a" && computerGuess === "d") ||
            (userGuess === "b" && computerGuess === "e") ||
            (userGuess === "c" && computerGuess === "f")) {
            wins++;
        } else if (userGuess === computerGuess) {
            ties++;
        } else {
            losses++;
        }
    }; 




