function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (amount <= 100 && amount >= 1) {
    let markup = '';
    for (let i = 0; i < amount; i += 1) {
      markup += `<div style="width:${30 + 10 * i}px; height:${
        30 + 10 * i
      }px; background-color:${getRandomHexColor()}"></div>`;
    }
    document.querySelector('div#boxes').innerHTML = markup;
    document.querySelector('div#controls input').value = '';
  } else {
    return;
  }
}

function destroyBoxes() {
  document.querySelector('div#boxes').innerHTML = '';
}

document
  .querySelector('button[data-create]')
  .addEventListener('click', onCreateButton);
document
  .querySelector('button[data-destroy]')
  .addEventListener('click', onDestroyButton);

function onCreateButton(event) {
  destroyBoxes();
  const quantityBoxes = Number(
    document.querySelector('div#controls input').value
  );
  let isInteger = Number.isInteger(quantityBoxes);
  if (isInteger) {
    createBoxes(quantityBoxes);
  } else {
    destroyBoxes();
    return alert('Input integer number!');
  }
}

function onDestroyButton(event) {
  destroyBoxes();
}
