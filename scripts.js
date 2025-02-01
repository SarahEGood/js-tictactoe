const boxes = document.querySelectorAll('.card');

boxes.forEach(box => {
    box.addEventListener('click', function handleClick(event) {
        console.log('clicky', event);
        event.currentTarget.innerHTML = 'X';
    });
});

console.log(boxes.length);