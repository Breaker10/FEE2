let score = JSON.parse(localStorage.getItem('score'))
    || {
    wins: 0,
    losses: 0,
    ties: 0
};

/*
if(score === null){     // !score works same as checking equal to null value
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
*/

updateScoreElement();

function playGame(userMove, computerMove) {
    let result = '';
    if (userMove === 'Scissors') {
        if (computerMove === 'Scissors') result = 'Tie.';
        if (computerMove === 'Rock') result = 'You Lose.';
        if (computerMove === 'Paper') result = 'You Win.';
    } else if (userMove === 'Paper') {
        if (computerMove === 'Paper') result = 'Tie.';
        if (computerMove === 'Scissors') result = 'You Lose.';
        if (computerMove === 'Rock') result = 'You Win.';
    } else {
        if (computerMove === 'Rock') result = 'Tie.';
        if (computerMove === 'Paper') result = 'You Lose.';
        if (computerMove === 'Scissors') result = 'You Win.';
    }
    if (result === 'You Win.') {
        score.wins++;
    } else if (result === 'You Lose.') {
        score.losses++;
    } else {
        score.ties++;
    }

    function updateResult() {
        document.body.querySelector('.js-result')
            .innerHTML = `${result}`;
    }

    function updateMoves() {
        document.body.querySelector('.js-moves')
            .innerHTML = `You <img class="move-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${userMove.toLowerCase()}-emoji.png" alt="${userMove}">
                    <img class="move-icon" src="https://supersimple.dev/projects/rock-paper-scissors/images/${computerMove.toLowerCase()}-emoji.png" alt="${computerMove}"> Computer`;
    }
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    updateResult();
    updateMoves();

}

function updateScoreElement() {
    document.body.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}

function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();  // range from 0 to 1 (i.e 0 <= _ < 1)

    if (0 <= randomNumber && randomNumber < 1 / 3) computerMove = 'Rock';
    else if (1 / 3 <= randomNumber && randomNumber < 2 / 3) computerMove = 'Paper';
    else computerMove = 'Scissors';

    return computerMove;
}
