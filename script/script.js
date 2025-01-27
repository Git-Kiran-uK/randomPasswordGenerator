import randomPassword from "./randomPassword.mjs";

const firstPassword = document.getElementById("password-one");
const secondPassword = document.getElementById("password-two");
const sliderValueEl = document.querySelector(".slider-value");
const sliderEl = document.querySelector(".slider");
const checkboxes = document.querySelectorAll('[type="checkbox"]');
const confirmationEl = document.getElementById("confirmation");

sliderEl.addEventListener("input", () => {
  let value = sliderEl.value;
  const sliderRect = sliderEl.getBoundingClientRect();
  const max = sliderEl.max;
  const min = sliderEl.min;

  const thumbWidth = 30;
  const offsetX =
    ((value - min) / (max - min)) * (sliderRect.width - thumbWidth) +
    thumbWidth / 2;

  sliderValueEl.textContent = value;

  sliderValueEl.classList.add("opaque");
  sliderValueEl.style.left = `${offsetX}px`;
});

document.getElementById("generate").addEventListener("click", () => {
  const length = sliderEl.value;
  let variety = "";
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) variety += checkbox.getAttribute("data-value");
  });
  const [passwordOne, passwordTwo] = randomPassword(length, variety);
  firstPassword.textContent = passwordOne;
  secondPassword.textContent = passwordTwo;
  copyToClipboard(firstPassword, secondPassword);
  sliderValueEl.classList.remove("opaque");
});

function copyToClipboard(...elements) {
  elements.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.classList.add("hovered");
    });
    element.addEventListener("click", () => {
      navigator.clipboard.writeText(element.textContent).then(() => {
        confirmationEl.textContent = `The password '${element.textContent}' is copied to the clipboard`;
        confirmationEl.style.display = "block";
        setTimeout(() => {
          confirmationEl.style.display = "none";
        }, 2500);
      });
    });
    element.addEventListener("mouseleave", () => {
      element.classList.remove("hovered");
    });
  });
}

/* Functionality need to be added */
// 2. Add checkboxes to allow users to select which types of characters to include in their passwords (e.g., uppercase, lowercase, numbers, special characters).
