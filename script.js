// 'use strict';

// const score0EL = document.getElementById('score--0');
// const score1EL = document.getElementById('score--1');
// const diceEL = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const player0 = document.querySelector('.player--0');
// const player1 = document.querySelector('.player--1');
// // const currentPlayer

// let currentScore = 0;

// // score0EL.textContent =  0
// let totalScore0 = Number(score0EL.textContent);
// let totalScore1 = Number(score1EL.textContent);

// // console.log(totalScore1);

// diceEL.classList.add('hidden');

// let activePlayer = 0;

// // if(activePlayer !== 0){
   
// // }
// btnRoll.addEventListener('click', function(){

//     const dice = Math.trunc(Math.random() * 6) + 1;
//     diceEL.classList.remove('hidden');
//     diceEL.src = `dice-${dice}.png`;

//     if(dice===1){
//         // score0EL+=current0;
        
//         currentScore = 0;
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore; //needs to be rechecked;
//         activePlayer = activePlayer === 0 ? 1 : 0;
//         player0.classList.toggle('player--active');
//         player1.classList.toggle('player--active');
//         //switch player
//     }
//     else {
//         currentScore+=dice;
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//     }
// })
// // console.log(Number(score0EL.textContent));
// btnHold.addEventListener('click',function(){

//     if(totalScore0 >=100){
//         diceEL.classList.add('hidden');
//         player1.classList.add('player--winner');
//         player1.classList.remove('player--active');
//     }
//     else if(totalScore1 >=100){
//         diceEL.classList.add('hidden');
//         player1.classList.add('player--winner');
//         player1.classList.remove('player--active');
//     }

// else {
//     if(activePlayer === 0 ){
//         totalScore0+= currentScore;
//         score0EL.textContent = totalScore0;
//         currentScore = 0;
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//         activePlayer = 1;
//         player0.classList.toggle('player--active');
//         player1.classList.toggle('player--active');
        
//     } 
//     else{
        
//         totalScore1+=currentScore;
//         score1EL.textContent = totalScore1
//         currentScore = 0;
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//         activePlayer = 0;
//         player0.classList.toggle('player--active');
//         player1.classList.toggle('player--active');
//     }
// }
// });

// btnNew.addEventListener('click',function(){

//     diceEL.classList.add('hidden'); 
//     totalScore0 = 0;
//     totalScore1 = 0;
//     currentScore = 0;
//     activePlayer = 0;
//     document.querySelectorAll('.current-score').textContent = 0;
//     score0EL.textContent = 0;
//     score1EL.textContent = 0;
//     player0.classList.add('player--active');
//     player1.classList.remove('player--active');

// })


'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.querySelector('.winner0').classList.add('winner');
  document.querySelector('.winner1').classList.add('winner');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
 
//   document.querySelector(`.winner${activePlayer}`).classList.remove('winplay');

};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    
      
      document
        .querySelector(`.winner${activePlayer}`)
        .classList.add('winplay');
    document.querySelector(`.winner${activePlayer}`).classList.remove('winner');

        

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);