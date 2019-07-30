// Creates an array that lists out all of the options (Letters to guess).
var wins = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var alreadyGuessed = []

// Creating variables to hold the number of wins, losses, guesses left and guesses so far. They start at 0.
var winsCount = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var GuessesLeftText = document.getElementById("guesses-left-text");
var GuessesSoFarText = document.getElementById("guesses");
console.log(GuessesSoFarText)

// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    
    
    
    // Determines which key was pressed.
    var userGuess = event.key;
    alreadyGuessed.push(userGuess);
    console.log(alreadyGuessed)
    GuessesSoFarText.textContent = alreadyGuessed.join(" ");

    winsText.textContent = winsCount

    lossesText.textContent = losses



    

    
    // Randomly chooses a choice from the options array. Guesses so far and guesses left.
    var computerGuess = wins[Math.floor(Math.random() * wins.length)];

    if (userGuess === computerGuess) {
            winsCount++;
        alreadyGuessed = []
        guessesLeft = 10
    }


    else {
        guessesLeft--;
    }
    if  (guessesLeft === 0) {
        losses++
        guessesLeft = 10
        alreadyGuessed = []
        
    }
};
 



