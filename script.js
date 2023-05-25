function getRandomColor() {
    const colors = ['blueviolet', 'pink', 'gray'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function saveColorPalette() {
    const colorDivs = document.querySelectorAll('.color');
    const colorPalette = [];
    colorDivs.forEach((colorDiv) => {
        const colorClass = colorDiv.className.split(' ')[1];
        colorPalette.push(colorClass);
    });
    localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
}

function loadColorPalette() {
    const savedColorPalette = localStorage.getItem('colorPalette');
    if (savedColorPalette) {
        const colorPalette = JSON.parse(savedColorPalette);
        const colorDivs = document.querySelectorAll('.color');
        colorDivs.forEach((colorDiv, index) => {
            const colorClass = colorPalette[index];
            colorDiv.className = `color ${colorClass}`;
        });
    }
}

function selectColor() {
    const colors = document.querySelectorAll('.color');
  
    colors.forEach((color) => {
      color.addEventListener('click', () => {
        colors.forEach((c) => {
          c.classList.remove('selected');
        });
        color.classList.add('selected');
      });
    });
  }

function fillPixel() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(function(pixel) {
        pixel.addEventListener('click', function() {
            const selectedColor = document.querySelector('.selected');
            const colorClass = selectedColor.classList[1];
            pixel.style.backgroundColor = colorClass;
        });
    });
}

document.getElementById('button-random-color').addEventListener('click', () => {
    const colorDivs = document.querySelectorAll('.color');
    colorDivs.forEach((colorDiv, index) => {
        if (index > 0) {
            const randomColor = getRandomColor();
            colorDiv.className = `color ${randomColor}`;
        }
    });
    saveColorPalette();
});

loadColorPalette();

const pixelBoard = document.querySelector('#pixel-board');
for (let index = 0; index < 5; index += 1) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 5; j += 1) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        row.appendChild(pixel);
    }
    pixelBoard.appendChild(row);
}

selectColor();
fillPixel();

function clearPixelBoard() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = 'white';
    });
}

document.getElementById('clear-board').addEventListener('click', () => {
    clearPixelBoard();
});

const blackColor = document.querySelector('.color.black');
blackColor.classList.add('selected');