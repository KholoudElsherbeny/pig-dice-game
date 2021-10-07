'use strist';

// Selecting elements
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1E1 = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

// starting conditions
/*score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;*/

let scores, currentScore, activePlayer, playing;
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0El.textContent = 0;
    current1E1.textContent = 0;

    diceEL.classList.add('hidden');
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
};
init();

// create funtion to 2 call
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
}
//ROLLING DICE 
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1.create dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2.display dice
        diceEL.classList.remove('zbady');
        diceEL.src = `dice-${dice}.png`;

        // 3.checked roll
        if (dice !== 1) {
            // add current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // switch to next player when dice =1
            switchPlayer();
        }
    }

});

// btn hold

btnhold.addEventListener('click', function () {
    if (playing) {


        // create 
        scores[activePlayer] += currentScore;

        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        // check
        if (scores[activePlayer] >= 50) {

            playing = false;
            diceEL.classList.add('zbady');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

        } else {
            // switching
            switchPlayer();
        }
    }
});

//when you click on button new game to reload 
btnNew.addEventListener('click', init);



/*score0EL.textContent = 0;
score1EL.textContent = 0;
current0El.textContent = 0;
current1E1.textContent = 0;

player0EL.classList.remove('player--winner');
player1EL.classList.remove('player--winner');
player0EL.classList.add('player--active');
player1EL.classList.remove('player--active');
diceEL.classList.remove('hidden');

playing = true*/
