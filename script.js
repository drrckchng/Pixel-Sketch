function createGrid(size) {
    for(let i = 0; i < size ** 2; i++) {
        const oneGrid = document.createElement('div');
        oneGrid.classList.add('grid');
        container.appendChild(oneGrid);
    }
    container.style.gridTemplate = `repeat(${size}, 1fr)/repeat(${size}, 1fr)`;
}

const container = document.getElementById('container');
createGrid(20);