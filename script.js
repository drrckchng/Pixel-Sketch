function createGrid(size) {
    for(let i = 0; i < size; i++) {
        const oneGrid = document.createElement('div');
        oneGrid.classList.add('grid');
        container.appendChild(oneGrid);
    }
}

const container = document.getElementById('container');
createGrid(16);