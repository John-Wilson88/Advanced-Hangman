var Letter = require('./Letter');

function Word() {
	this.wordArr = [];
	this.disWordArr = [];

	//this method works.
	this.createWord = function(string) {
		for (var i = 0; i < string.length; i++) {
			this.wordArr[i] = new Letter(string.charAt(i));
		}
	};

	this.displayWord = function() {
		for (var j = 0; j < this.wordArr.length; j++){
			this.disWordArr[j] = this.wordArr[j].displayChar;
			//console.log(this.wordArr[j].displayChar);
		}
		console.log(this.disWordArr.join(' '));
	};

	this.checkWord = function(char) {
		for(var k = 0; k < this.wordArr.length; k++){
			this.wordArr[k].isCorrect(char);
		}
	}
}

module.exports = Word;
