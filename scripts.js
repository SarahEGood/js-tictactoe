const boxes = document.querySelectorAll('.card');

boxes.forEach(box => {
    box.addEventListener('click', function handleClick(event) {
        console.log('clicky', event);
        event.currentTarget.innerHTML = 'X';
        event.currentTarget.classList.add('player');

        computerTurn();
    });
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

