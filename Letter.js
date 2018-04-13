// constains Letter constructor.

function Letter(character) {
	this.character = character;
	this.displayChar = "_";
	this.guessed = false; // stores the value of whether the character has been guessed or  not.

	this.returnLetter = function() {
		if (this.guessed) {
			this.displayChar = this.character;
			return this.displayChar;
		}
	};

	this.isCorrect = function(guess) {
			if(guess == this.character) {
				this.guessed = true;
				this.returnLetter();
			} else {
				this.guessed = false;
			}			 
	};
}

module.exports = Letter;