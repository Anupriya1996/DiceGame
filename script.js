// 'use strict';

//selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const scoreP0 = document.querySelector('#score--0');
const scoreP1 = document.querySelector('#score--1');
const diceEle = document.querySelector('.dice');
const current0E = document.getElementById('current--0');
const current1E = document.getElementById('current--1');
const btnnew = document.querySelector(".btn--new");
const btnroll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");

let scores,currentScore,activePlayer,playing;

//starting condition
const init = function(){
     scores= [0,0];
     currentScore=0;
     activePlayer=0;
     playing = true;
    scoreP0.textContent=0;
    scoreP1.textContent=0;
    current0E.textContent=0;
    current1E.textContent=0;

    diceEle.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    };
init();

const switchFun = function()
{
    document.getElementById(`current--${activePlayer}`).textContent=0;  
    currentScore=0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    

};


//rolling dice functionatly
btnroll.addEventListener("click",function(){
    if (playing){
    const dice = Math.trunc(Math.random()*6)+1;
    // diceEle.classList.remove('hidden');
    diceEle.classList.remove("hidden");
    diceEle.src = `./images/dice-${dice}.png`;
//display dice

//check rolled
    if(dice !== 1){

        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;  
    }else {
        // var currentPlayer = activeplayer

        //switching to next player
            switchFun();
    }
}
});

btnhold.addEventListener('click',function(){
    if (playing){   //1.Add current score to active score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

    //2.Check if player 's score >=100
    if(scores[activePlayer]>= 20) {
        playing=false;
        diceEle.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {

    switchFun();
    }
}
});

    btnnew.addEventListener('click', init);






    



