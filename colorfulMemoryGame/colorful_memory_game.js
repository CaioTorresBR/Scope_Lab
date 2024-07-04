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

// represents time remaining for player to complete the game
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


// evaluates whether the two selected cards match each other in the memory
// match game 
function checkMatch() {

    // uses array destructuring to assign the first two elements of the 'selectedCards' to 'card1' and 'card2'
    const [card1, card2] = selectedCards;

    // comparing  cards colors:
        // checks if color value stored in 'dataset.color' attribute of 'card1'
        // matches color value of 'card2'
    if (card1.dataset.color === card2.dataset.color) {
        // if matched, adds class 'matched' to both cards
        card1.classList.add('matched');
        card2.classList.add('matched');

        // increases score by 2 pts when player matches a pair
        score += 2;

        // shows updated score
        scoreElement.textContent = `Score: ${score}`;

    } else {
        // if two cards selected don't match, it resets the text content
        // of both cards to '?', hiding the their colors again
        card1.textContent = '?';
        card2.textContent = '?';

        // sets background color to default (visual cue that cards didn't match)
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
        // clears the array to reset it for the next set of card selections
    selectedCards = [];
}


// initializes and starts game
function startGame() {
    // initializes timeLeft to 30 seconds
    let timeLeft = 30;

    // disables 'startbtn' button to prevent multiple game initiations simultaneously  
    startbtn.disabled = true;

    score = 0; // Reset score to zero

    // updates displayed score to 0
    scoreElement.textContent = `Score: ${score}`;

    // initiates game timer counting down from 'timeLeft' duration
    startGameTimer(timeLeft);


    // preparing cards and game elements :
        // shuffles the 'colors' array and duplicates it to create pairs
    cards = shuffle(colors.concat(colors));
    
        // clears selectedCards array, t prepare for new card selections in the new game
    selectedCards = [];

        // clears gameContainer, removing cards from previous games
    gameContainer.innerHTML = '';

        // generates new set of cards within the game container
    generateCards();

    // adds event listener to the game container
    // enabling card clicks and triggering the 'handleCardClick' function
    // to manage the gameplay when cards are clicked
    gameContainer.addEventListener('click', handleCardClick);
}


// manages game timer
function startGameTimer(timeLeft) {
    //sets initial display of the timer
    timerElement.textContent = `Time Left: ${timeLeft}`;

    // initiates an intervale that triggers a function every second (1000 miliseconds)
    // to update the timer
    gameInterval = setInterval(() => {
        // decrements timeLeft every second within the interval
        timeLeft--;

        // updates displayed time after each decrement
        timerElement.textContent = `Time Left: ${timeLeft}`;

        // checks if remaining time reaches 0
        if (timeLeft === 0) {
            // stops interval, ending timer from counting down further
            clearInterval(gameInterval);

            let timeLeft = 30;
            alert('Game Over!');

            // re-enables 'startbtn' button, allowing player to start a new game
            startbtn.disabled = false;
        }
    }, 1000);
    }

// triggers startGame function 
startbtn.addEventListener('click', startGame);