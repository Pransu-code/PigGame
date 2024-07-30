'use strict';

const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
// const currentPlayer

let currentScore = 0;

// score0EL.textContent =  0
let totalScore0 = Number(score0EL.textContent);
let totalScore1 = Number(score1EL.textContent);

// console.log(totalScore1);

diceEL.classList.add('hidden');

let activePlayer = 0;

// if(activePlayer !== 0){
   
// }
btnRoll.addEventListener('click', function(){

    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    if(dice===1){
        // score0EL+=current0;
        
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore; //needs to be rechecked;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        //switch player
    }
    else {
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
})
// console.log(Number(score0EL.textContent));
btnHold.addEventListener('click',function(){

    if(activePlayer === 0 ){
        totalScore0+= currentScore;
        score0EL.textContent = totalScore0;
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = 1;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        
    } 
    else{
        
        totalScore1+=currentScore;
        score1EL.textContent = totalScore1
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }
})

btnNew.addEventListener('click',function(){

    diceEL.classList.add('hidden'); 
    totalScore0 = 0;
    totalScore1 = 0;
    currentScore = 0;
    activePlayer = 0;
    document.querySelectorAll('.current-score').textContent = 0;
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    player0.classList.add('player--active');
    player1.classList.remove('player--active');

})
