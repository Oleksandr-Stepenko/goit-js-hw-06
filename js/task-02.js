const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
	'Condiments',
	
];

const listEl = document.querySelector("#ingredients");

const makeIngredientList = (ingredients) => {
	return ingredients.map((ingredient) => {
		const itemEl = document.createElement("li");
		itemEl.className = "item";
    itemEl.textContent = ingredient;

    return itemEl;
  });
};

const elements = makeIngredientList(ingredients);
listEl.append(...elements);
