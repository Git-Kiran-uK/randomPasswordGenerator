import randomPassword from "./randomPassword.mjs";

const firstPassword = document.getElementById('password-one');
const secondPassword = document.getElementById('password-two');
const sliderValueEl = document.querySelector('.slider-value');
const sliderEl = document.querySelector('.slider');

sliderEl.addEventListener('input', () => {
    let value = sliderEl.value;
    const sliderRect = sliderEl.getBoundingClientRect();
    const max = sliderEl.max;
    const min = sliderEl.min;
    
    const thumbWidth = 30;
    const offsetX = ((value - min) / (max - min)) * (sliderRect.width - thumbWidth) + (thumbWidth / 2);
    
    sliderValueEl.textContent = value;
    
    sliderValueEl.classList.add('opaque');
    sliderValueEl.style.left = `${offsetX}px`;
});

document.getElementById('generate').addEventListener('click', () => {
    const length = sliderEl.value;
    const [passwordOne, passwordTwo] = randomPassword(length);
    firstPassword.textContent = passwordOne;
    secondPassword.textContent = passwordTwo;
    sliderValueEl.classList.remove('opaque');
});

/* Functionality need to be added */
// 2. Add checkboxes to allow users to select which types of characters to include in their passwords (e.g., uppercase, lowercase, numbers, special characters).