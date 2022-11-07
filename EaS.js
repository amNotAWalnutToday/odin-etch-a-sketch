function createGrid(squares) {
    for(let i = squares; i > 0; i--){
        const square = document.createElement('div')
        square.style.cssText = 'border:1px solid black; height:25px; width:25px;'
        square.classList.add('square')
        container.appendChild(square);
    }
}

createGrid(Math.pow(16,2));