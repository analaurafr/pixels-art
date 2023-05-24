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

const pixelBoard = document.querySelectorAll('pixel-board');

const createPixelBoard() => {
    for (let index = 0; index < totalPixels; index += 1) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelBoard.appendChild(pixel);
}
}

createPixelBoard();
