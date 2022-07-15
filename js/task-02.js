const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemList = ingredients.map(ingredient => {
  const newItem = document.createElement("li");
  newItem.textContent = ingredient;
  newItem.classList.add(`item`);
  return newItem
});

document.querySelector('#ingredients').append(...itemList);