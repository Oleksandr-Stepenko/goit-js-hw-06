const navItem = document.querySelectorAll(".item");
console.log(`Number of categories: ${navItem.length}`);

navItem.forEach((item) => {
  console.log("Category:", item.querySelector("h2").textContent);
  console.log("Elements:", item.querySelectorAll("li").length);
});
