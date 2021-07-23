let btn = document.querySelector('.btn');
let container = document.querySelector('.background');
let colorValue = document.querySelector('#color-value-main');

let colors = ["red", "green", "blue", "yellow", "#f1f5f8", "rgb(0, 100, 0)"]


const getRandomColor = () => {
    let color;
    color = Math.round(Math.random() * 16777215).toString(16);
    container.style.backgroundColor = `#${color}`;
    colorValue.innerText = `#${color.toUpperCase()}`;
    colorValue.style.color = `#${color}`;
}

const getColorFromArr = () => {
    let color = colors[Math.floor(Math.random() * colors.length)];
    container.style.backgroundColor = `${color}`;
    colorValue.innerText = `${color}`;
    colorValue.style.color = `${color}`;
}

btn.addEventListener('click', () => {
    getColorFromArr();
})