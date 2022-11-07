function createGrid(squares) {
    for(let i = squares; i > 0; i--){
        const square = document.createElement('div');
        square.style.cssText = 'border:1px solid black; height:25px; width:25px;';
        square.classList.add('square');
        container.appendChild(square);
    }
}
createGrid(Math.pow(16,2));

const gridSquare = document.querySelectorAll('.square');
gridSquare.forEach(square => square.addEventListener('mouseenter',hoverEnter));
gridSquare.forEach(square => square.addEventListener('mouseleave',hoverLeave));

function hoverEnter(e){
    e.target.setAttribute('class','hover');
}

function hoverLeave(e){
    e.target.setAttribute('class','hoverExit hover');
    e.target.addEventListener('animationend', hoverTrail);
}

function hoverTrail(e) {
    e.target.setAttribute('class','none');
}