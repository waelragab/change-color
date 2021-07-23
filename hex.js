let btn = document.querySelector('.btn');
let container = document.querySelector('.background');
let colorValue = document.querySelector('#color-value-main');

let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
btn.addEventListener('click', () => {
    let randomColor = getRandomColor();
    console.log(randomColor);
    container.style.backgroundColor = randomColor;
    colorValue.textContent = randomColor;
})

const getRandomColor = () => {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colors[Math.floor(Math.random() * 16)];
    }
    return color;
}