const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onClickButton)
	
function onClickButton (event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
	email.value === "" || password.value === ""
		? alert("Всі поля повинні бути заповнені.")
		: console.log({ email: email.value, password: password.value });
	event.currentTarget.reset();
}



