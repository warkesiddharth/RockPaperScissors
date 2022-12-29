function getcomputerchoice() {

    let arr = ['ROCK', 'PAPER', 'SCISSOR'];

    return arr[Math.floor(Math.random() * arr.length)];

}
function playervalue() {
    let value = window.prompt("your input for the game ?");
    return value.toUpperCase();
}


function playround(playerselection, computerselction) {

    if (playerselection == "ROCK" && computerselction == "SCISSOR") {
        return "You Win! Rock beats Scissor";
    } else if (playerselection == "ROCK" && computerselction == "PAPER") {
        return "You Lose! Paper beats Rock";
    } else if (playerselection == "ROCK" && computerselction == "ROCK") {
        return "Match Drawn!";
    } else if (playerselection == "PAPER" && computerselction == "SCISSOR") {
        return "You Lose! Scissor beats paper";
    } else if (playerselection == "PAPER" && computerselction == "ROCK") {
        return "You Win! PAPER beats ROCK";
    } else if (playerselection == "PAPER" && computerselction == "PAPER") {
        return "Match Drawn";
    } else if (playerselection == "SCISSOR" && computerselction == "SCISSOR") {
        return "MATCH DRAWN";
    } else if (playerselection == "SCISSOR" && computerselction == "ROCK") {
        return "You LOSE! ROCK beats Scissor";
    } else {
        return "You Win! Scissor beats Paper";
    }
}

function game(playround) {
    let playerscore = 0;
    let computerscore = 0;
    for (let i = 0; i < 5; i++) {
        let playerselection = playervalue();
        let computerselction = getcomputerchoice();
        let result = playround(playerselection, computerselction);
        let diff = Math.abs(playerscore - computerscore);
        if (diff == 3) {
            if (playerscore > computerscore) {
                return "WINNER!!";
            }
            else {
                return "LOSSER!!";
            }
        }

        if (result[4] == 'W') {
            playerscore++;
            console.log(result);
        }
        else {
            computerscore++;
            console.log(result);
        }

    }
    if (playerscore > computerscore) {
        return "WINNER!!";
    }
    else {
        return "LOSSER!!";
    }

}






console.log(game(playround));