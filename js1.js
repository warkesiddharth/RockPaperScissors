function getcomputerchoice() {

    let arr = ['ROCK', 'PAPER', 'SCISSOR'];

    return arr[Math.floor(Math.random() * arr.length)];

}

let playerscore = 0;
let computerscore = 0;
let result;
let win = false;

const div = document.createElement('div');
const initial = document.querySelector('#initial');
initial.after(div);
const div2 = document.createElement('div');
div.after(div2);
div.textContent = " ";
div2.textContent = " ";

function playround(playerselection, computerselction) {



    if (playerselection == "ROCK" && computerselction == "SCISSOR") {
        result = "You Win! Rock beats Scissor";
        playerscore++;
    } else if (playerselection == "ROCK" && computerselction == "PAPER") {
        result = "You Lose! Paper beats Rock";
        computerscore++;
    } else if (playerselection == "ROCK" && computerselction == "ROCK") {
        result = "Match Drawn!";
    } else if (playerselection == "PAPER" && computerselction == "SCISSOR") {
        result = "You Lose! Scissor beats paper";
        computerscore++;
    } else if (playerselection == "PAPER" && computerselction == "ROCK") {
        result = "You Win! PAPER beats ROCK";
        playerscore++;
    } else if (playerselection == "PAPER" && computerselction == "PAPER") {
        result = "Match Drawn";
    } else if (playerselection == "SCISSOR" && computerselction == "SCISSOR") {
        result = "MATCH DRAWN";
    } else if (playerselection == "SCISSOR" && computerselction == "ROCK") {
        result = "You LOSE! ROCK beats Scissor";
        computerscore++;
    } else {
        result = "You Win! Scissor beats Paper";
        playerscore++;
    }




    console.log(result);
    div.textContent = `The resul of the played round is ${result}.\nThe current player-score and computer-score are ${computerscore} and ${playerscore} `;

    if (playerscore == 5) {
        div2.textContent = "WINNER";
        win = true;

    }
    else if (computerscore == 5) {
        div2.textContent = "A FUCKING LOSSER U R!";
        win = true;

    }





}



var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissor = document.querySelector('#scissor');



rock.addEventListener('click', function (e) {
    playround("ROCK", getcomputerchoice());
});
paper.addEventListener('click', function (e) {
    playround("PAPER", getcomputerchoice());
});
scissor.addEventListener('click', function (e) {
    playround("SCISSOR", getcomputerchoice());
});











