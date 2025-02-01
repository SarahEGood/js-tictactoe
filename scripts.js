var playerName = '';
const boxes = document.querySelectorAll('.card');
const winConditions = [
    ["one","four","seven"],
    ["two", 'five', 'eight'],
    ['three', 'six', 'nine'],
    ['one', 'two', 'three'],
    ['four', 'five', 'six'],
    ['seven', 'eight', 'nine'],
    ['one', 'five', 'nine'],
    ['three', 'five', 'seven']
];

document.getElementById('gamebutton').addEventListener('click', function () {
    event.preventDefault();
    playerName = document.getElementById('yourName').value;
    console.log(playerName);
    document.getElementById('results').innerHTML = '';
});

boxes.forEach(box => {
    box.innerHTML = '';
    box.className = 'card';
    box.addEventListener('click', function handleClick(event) {
        let selectedBox = event.target;
        selectedBox.innerHTML = 'X';
        selectedBox.classList.add('player');
        winCheck();
        computerTurn();
        winCheck('computer');
    })
});

function computerTurn() {

    computerTarget = Math.floor(Math.random() * 8);
    computerChoice = boxes[computerTarget];

    while (computerChoice.classList.contains('player') || computerChoice.classList.contains('computer')) {
        computerTarget = Math.floor(Math.random() * 8);
        computerChoice = boxes[computerTarget];
    }

    computerChoice.innerHTML = 'O';
    computerChoice.classList.add('computer');


}

function winCheck(turn='player') {
    selected = document.querySelectorAll('.' + turn);
    console.log(selected);
    let selectedboxes = []
    selected.forEach(box => {
        selectedboxes.push(box.id);
    })
    console.log(selectedboxes);

    for (let i=0; i<winConditions.length; i++) {
        condition = winConditions[i];
        let checker = condition.every(elem => selectedboxes.includes(elem));
        if (checker === true) {
            const result = document.createElement('p');
            if (turn === 'player') {
                result.innerHTML = playerName + ' wins!';
            } else {
                result.innerHTML = 'Sorry, you lose. :('
            }
            document.getElementById('results').appendChild(result);

            gamebtn = document.getElementById('gamebutton')
            gamebtn.value = 'Restart';

            document.getElementById('gamebutton').addEventListener('click', function() {
                boxes.forEach(box => {
                    box.innerHTML = '';
                    box.className = 'card';
                })
            })
        }
    }
}