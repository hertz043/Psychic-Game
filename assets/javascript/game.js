
// Array containing the composer names that can be selected from.
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables to store wins, losses, guesses remaining, etc
var guessesLeft = 10;
var totalWins = 0;
var totalLosses = 0;
var keyPressed = [];
var randomLetter = [];
var lettersGuessed = [];

var winner = "You Win! - press any key to try again";
var loser = "You Lose! - press any key to try again";



function mainGame() {

    // Randomly selects a letter from the alphabet array
    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

    //Updates scoreboard
    function updateDOM () {
        var guessesRemain = document.getElementById('guessesRemain');
        guessesRemain.textContent = guessesLeft;

        var wins = document.getElementById('wins');
        wins.textContent = totalWins;
        
        var loses = document.getElementById('loses');
        loses.textContent = totalLosses;
    }

    // Stores keys pressed by player
        document.onkeyup = function(event) {
            var keyPressed = event.key;
            lettersGuessed.push(keyPressed);
            
            //Played guessed correctly and wins, resets guesses and restarts game.
            if (keyPressed === randomLetter){
                totalWins++; // adds to total wins

                var textToUpdate = document.getElementById('letterbox'); //assigns element to variable
                textToUpdate.textContent = winner; //updates DOM with "You Win!" text

                lettersGuessed = []; //resets value
                keyPressed = []; //resets value
                guessesLeft = 10; //resets value
                updateDOM(); //updates scoreboard
                mainGame(); //reruns game
            }

            //Player guessed incorrectly, remove one from guessesLeft, add incorrect letter into lettersGuessed array
            else if ((keyPressed !== randomLetter) && (guessesLeft > 1)) {
                guessesLeft--;

                for (i=0;i<lettersGuessed.length;i++) {
                    var textToUpdate = document.getElementById('letterbox');
                    textToUpdate.textContent = lettersGuessed;
                    console.log(lettersGuessed);                
                }

                updateDOM(); //updates scoreboard

            }

            //player runs out of guesses and loses, resets and restarts game.
            else {
                totalLosses++; //iterates losses

                var textToUpdate = document.getElementById('letterbox'); //assigns element to variable
                textToUpdate.textContent = loser; //updates DOM with "You Lose!" text

                lettersGuessed = []; //
                keyPressed = [];
                guessesLeft = 10;
                updateDOM(); //updates scoreboard
                mainGame(); //restarts game
            }
         
        }
    };


mainGame(); //runs the game
