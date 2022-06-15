function createGrid(size) {
    for(let i = 0; i < size ** 2; i++) {
        const oneGrid = document.createElement('div');
        oneGrid.classList.add('grid');
        container.appendChild(oneGrid);
    }
    container.style.gridTemplate = `repeat(${size}, 1fr)/repeat(${size}, 1fr)`;
}

const container = document.getElementById('container');
createGrid(16);

const grids = document.querySelectorAll('.grid');
grids.forEach(grid => {
    grid.addEventListener('click ', () => grid.classList.add('show'));
 });
// Add event listener to all grids using for each

// Create alert/popup to allow user to enter custom num
// Need to reassign event listeners again
// Probably can have function to add event listeners