var Card = require('./flashCards.js');

var Deck = function(name){
	this.name = name;
	this.cards = [];
};
Deck.prototype.addCard = function(keyword, answer){
	this.cards.push(new Card(keyword, answer))
};

module.exports = Deck;