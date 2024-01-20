function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const button = document.querySelector('.change-color');

const onButtonClick = () => {
  const bodyColor = getRandomHexColor();
  colorSpan.textContent = bodyColor;
  body.style.backgroundColor = bodyColor;
};

button.addEventListener('click', onButtonClick);
