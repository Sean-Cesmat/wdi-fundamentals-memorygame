var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
}, 
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
}, 
{
	rank: "king",
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
}, 
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var score = 0;
var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			score++;
			document.getElementById('score').textContent = score;
			alert('You found a match!!');
		}
		else {
			alert('Sorry, try again.');
		}
	}
};
var flipCard = function() {
	cardId = this.getAttribute("data-id");
	console.log('User flipped ' + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();
	
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById('game-board').appendChild(cardElement);


	}
};

var clearBoard = function() {
	for (var i = 0; i < cards.length; i++){
		document.getElementsByTagName('img')[i].setAttribute('src', 'images/back.png');
		cardsInPlay = [];
	}
};	
var resetButton = document.getElementsByClassName('reset-button')[0];
resetButton.addEventListener('click', clearBoard);

createBoard();


// flipCard(0);
// flipCard(2);

