// -- Defining variables to access data --

const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];

// initializes by shuffling and attaching the 'colors' array, this
// 'cards' array holds the color values for the cards in the game
let cards = shuffle(colors.concat(colors));

// acts as a temporary storage for the currently selected cards during the game
let selectedCards = [];

// tracks the player's score throughout the game
// The score gets incremented whenever the player matches a pair of cards successfully
let score = 0;

// represents the time remaining for the player to complete the game
let timeLeft = 30;

// control the countdown mechanism for the game's duration. 
// continuously decrements the 'timeLeft' variable, 
// updating the displayed time and triggering the game's end when the time expires.
let gameInterval;



// -- DOM element selection  --
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');


// --  Creating and calling functions to start the game --

function generateCards() {

    // iterate over each element (color) in the 'cards' array
    for (const color of cards) {

        // creates a new html div that represents a card
        const card = document.createElement('div');

        // adds a class 'card'to the new div
        card.classList.add('card');

        // sets the 'dataset.color' attribute of the card element to the current
        // color value from the 'cards' array.
        card.dataset.color = color;

        // this represents that the color of the card is hidden until it's clicked by the player
        card.textContent = '?';

        // the newly created card element is attached to the 'gameContainer' element as a child
        gameContainer.appendChild(card);
    }
}

// shuffles the elements of an array in random order (using Fisher-Yates algorithm)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// manages the logic when a user clicks the card in the memory match game
function handleCardClick(event) {

    // retrieves the element that triggered the event (clicked card)
    const card = event.target;

    // checks if the clicked element is a card and if it's already matched
    if (!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }

    // revealing the card :
        // sets the text content of the clicked card to the value stored in it's 'dataset.color'
        // reveals the card's color by changing the text content to the color value
    card.textContent = card.dataset.color;
        // changes the card background color to match the revealed color
    card.style.backgroundColor = card.dataset.color;

    // handling selected cards :
        // adds the clicked card to the 'selectedCards' array
        // to indicate it's one of the cards currently chosen by the player
    selectedCards.push(card);

    // checking for the matches :
        // checks if two cards have been selected
    if (selectedCards.length === 2) {
        // if that's the case, it uses setTimeout() to delay the execution of the checkMatch() by 500 miliseconds
        // this delay allows the player to see both selected cards before the comparison briefly
        setTimeout(checkMatch, 500);
    }
}
