const navItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${navItemEl.length}`);

navItemEl.forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
	console.log("Elements:", item.querySelectorAll("li").length);
});
