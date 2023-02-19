const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
	'Condiments',
];

const listEl = document.querySelector("#ingredients");

const ingredientsList = (ingredients) => {
	return ingredients.map((ingredient) => {
		const itemEl = document.createElement("li");
		itemEl.className = "item";
    itemEl.textContent = ingredient;

	return itemEl;
	// return listEl.append(itemEl);
  });}


const elements = ingredientsList(ingredients);
listEl.append(...elements);
