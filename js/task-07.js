// const refs = {
//   inputEl: document.querySelector("#font-size-control"),
//   textEl: document.querySelector("#text"),
// };

// refs.textEl.style.fontSize = `${refs.inputEl.value}px`;

// console.log("refs.inputEl.value", refs.inputEl.value);
// refs.inputEl.addEventListener("input", (event) => {
//   refs.textEl.style.fontSize = `${refs.inputEl.value}px`;
// });


const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
input.addEventListener("input", handleInput);

function handleInput(event) {
	console.log(event.currentTarget.value);
	spanText.style.fontSize = event.currentTarget.value + "px";
	
}
