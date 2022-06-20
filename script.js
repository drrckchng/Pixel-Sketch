function createGrid(size) {
    for(let i = 0; i < size ** 2; i++) {
        const oneGrid = document.createElement('div');
        oneGrid.classList.add('grid');
        container.appendChild(oneGrid);
    }
    container.style.gridTemplate = `repeat(${size}, 1fr)/repeat(${size}, 1fr)`;
    selectGrids().forEach(grid => {
        grid.addEventListener('mouseover', () => grid.classList.add('draw'));
    });
}

function clearGrid() {
    selectGrids().forEach(grid => {
        grid.remove();
    });
}

function selectGrids() {
    return document.querySelectorAll('.grid');
}

const container = document.getElementById('container');
createGrid(24);

const gridDimension = document.getElementById('grid-number');
gridDimension.addEventListener('click', function() {
    let userGridDimension = prompt('Enter grid dimensions: ', 16);
    clearGrid();
    createGrid(userGridDimension);
});


// Create alert/popup to allow user to enter custom num
// Need to reassign event listeners again
// Probably can have function to add event listeners