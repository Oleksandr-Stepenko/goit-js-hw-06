const inputText = document.querySelector("#validation-input");

inputText.addEventListener("blur", outOfFocus);

function outOfFocus() {
  inputText.value.length === 0
    ? inputText.classList.remove("invalid") ||
      inputText.classList.remove("valid")
    : inputText.value.length !== Number(inputText.dataset.length)
    ? inputText.classList.add("invalid") || inputText.classList.remove("valid")
    : inputText.classList.add("valid") || inputText.classList.remove("invalid");
}


// function outOfFocus() {
// 	if (inputText.value === "") {
// 		inputText.classList.remove("invalid");
// 		inputText.classList.remove("valid");
// 	}
// 	else if (inputText.value.length === Number(inputText.dataset.length)) {
// 		inputText.classList.remove("invalid");
//     inputText.classList.add("valid");
// 	}
// 	else {
// 		inputText.classList.add("invalid");
// 		inputText.classList.remove("valid");
// 	}
// 	// console.log(inputText.value.length);
// 	// console.log(inputText.dataset);
// }

