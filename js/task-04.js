
const addNum = document.querySelector('[data-action="increment"]');
const subNum = document.querySelector('[data-action="decrement"]');
let span = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  span.textContent = counterValue;
};
addNum.addEventListener("click", increment);

const decrement = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};


subNum.addEventListener("click", decrement);
