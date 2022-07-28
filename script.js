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
const colorSelector = document.getElementById('color');
const gridDimension = document.getElementById('size');
const gridSizeValue = document.getElementById('size-value');
gridSizeValue.innerText = gridDimension.value;
createGrid(gridDimension.value);

colorSelector.addEventListener('change', function () {
    document.querySelectorAll('.draw').forEach(element => {
        element.style.backgroundColor = colorSelector.value;
    });
});

gridDimension.addEventListener('input', function() {
    gridSizeValue.innerText = gridDimension.value;
    clearGrid();
    createGrid(gridDimension.value);
});

document.getElementById('clear').addEventListener('click', function() {
    clearGrid();
    createGrid(gridDimension.value);
});