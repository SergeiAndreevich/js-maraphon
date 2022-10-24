const board = document.querySelector('.container');
const SQUARER_NUMBER = 500,
    colors = ['red', 'blue', 'yellow', 'purple', 'green', 'skyblue'];

for(let i = 0; i < SQUARER_NUMBER; i++){
    const square = document.createElement('div');

    board.append(square);
    square.addEventListener('mouseover', () => {
        setColor(square);
    });
    square.addEventListener('mouseleave', () =>{
        leaveColor(square);
    });
    square.classList.add('square');
}

function setColor(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`
    element.style.opacity = '70%';
}

function leaveColor(e){
    e.style.background = '';
    e.style.boxShadow = '';
    e.style.opacity = '100%';
}

function getRandomColor(){
    let index = Math.floor(Math.random() * colors.length);
    return colors[index];
}