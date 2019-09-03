export function MemoryGame(){
  this.cards = [a, aa, b, bb, c, cc, d, dd, e, ee, f, ff];
  this.arrangement = [];
}

var a = new MemoryCard ("turtle", "turtle", 1);
var aa = new MemoryCard ("turtle", "turtle", 2);

var b = new MemoryCard ("dog", "dog", 3);
var bb = new MemoryCard ("dog", "dog", 4);

var c = new MemoryCard ("rabbit", "rabbit", 5);
var cc = new MemoryCard ("rabbit", "rabbit", 6);

var d = new MemoryCard ("hippo", "hippo", 7);
var dd = new MemoryCard ("hippo", "hippo", 8);

var e = new MemoryCard ("panda", "panda", 9);
var ee = new MemoryCard ("panda", "panda", 10);

var f = new MemoryCard ("lion", "lion", 11);
var ff = new MemoryCard ("lion", "lion", 12);

export var memoryGame = new MemoryGame();

MemoryGame.prototype.randomizer = function () {
  var test = memoryGame.cards;
  var duplicateProtector = [];
  for (var i=0; duplicateProtector.length<12; i++) {
    var randInd = Math.floor(Math.random()*12);
    if (duplicateProtector.indexOf(randInd) === -1) {
      duplicateProtector.push(randInd);
    }
  }
  for (var j=0; j<12 ; j++) {
    var newIndex = duplicateProtector[j];
    memoryGame.arrangement.push(test[newIndex]);
  }
};



export function MemoryCard(cardName, cardImageURL, cardID) {
  this.cardName = cardName;
  this.cardImageURL = cardImageURL;
  this.cardID = cardID;
}
