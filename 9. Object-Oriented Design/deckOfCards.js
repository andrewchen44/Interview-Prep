// Class to create a standard 52 card set

const Deck = function() {
    this.cards = [];

    this.suffle = function(){
        //shuffles cards
    };

    this.size = this.cards.length;

    this.takeFromTop = function() {
        return this.cards.pop;
    };


};

const Card = function(suit, value) {
    this.suit = suit;
    this.value = value;
}