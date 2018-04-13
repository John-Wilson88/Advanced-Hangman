function hangman() {

var Word = require('./Word');
var officeChars = ["jim", "dwight", "michael", "andy", "pam", "jan", "angela", "philis"];

// prompt the user to play the game.
// generate random number, and select word using the random number.
// display the random word, a underscores.
// let the user take turns guessing letters
// if guess is correct display the letter in the word and a letter to guessed letter array. 
// if not guess is inccorrect add letter to user guess array.


//for the games initail start.


var randChar = Math.floor(Math.random() * officeChars.length);
var inquirer = require('inquirer');

inquirer.prompt([ 

		{
			type: "list",
			message: "Welcome to Commandline Hangman!",
			choices: ["New Game", "End Game"],
			name: "start"
		}
	]).then(function(inquirerResponse) {
		if (inquirerResponse.start == 'New Game') {
			//generates random number for word selection.

			var word = officeChars[randChar];
			var newWord = new Word();
			newWord.createWord(word);
			newWord.displayWord();
			guessingLetters();

			function guessingLetters() {
				var guessInquire = require('inquirer');

				guessInquire.prompt([

						{
							type: "input",
							message:"guess a letter!",
							name: "userGuess"
						}

					]).then(function(guessResponse){
						
							newWord.checkWord(guessResponse.userGuess);
							newWord.displayWord();

						if(newWord.disWordArr.includes('_')) {

							guessingLetters();

						} else {
							console.log("you win!");

							var playAgain = require('inquirer');

							playAgain.prompt([
								{
									type: "list",
									message: "Would you like to play again?",
									choices: ["Absolutely I Do", "False Black Bear"],
									name: "anotherOne"
								}


								]).then(function(playAgainResponse) {
									if(playAgainResponse.anotherOne == "Absolutely I Do") {
										hangman();
									}
							});
							
						}

					}); // end of guessInquire.

			} // end of guessingLetters function

		} // end of if statement.

	}); // end of inquire.

}

hangman();







