const buttonEl = {
  add: document.querySelector("[data-action='increment']"),
  sub: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
};

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  buttonEl.span.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  buttonEl.span.textContent = counterValue;
};

buttonEl.add.addEventListener("click", increment);
buttonEl.sub.addEventListener("click", decrement);
