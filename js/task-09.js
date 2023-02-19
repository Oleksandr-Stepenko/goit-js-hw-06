
const body = document.querySelector("body");
const colorText = document.querySelector(".color");
const buttonChangeColor = document.querySelector(".change-color");

buttonChangeColor.addEventListener("click", onButtonClick);

function onButtonClick() {
  const randomBackgroundColor = getRandomHexColor();
  body.style.backgroundColor = randomBackgroundColor;
  colorText.textContent = randomBackgroundColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
