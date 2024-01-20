const textInput = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');

textInput.addEventListener('input', event => {
  const userName = event.currentTarget.value.trim();
  if (userName === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = userName.trim();
  }
});
