const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const accItems = [];

ingredients.forEach(function(ingredient)
{

const newItem = document.createElement("li");
newItem.textContent = ingredient;
newItem.classList.add(`item`);
accItems.push(newItem);
})


document.querySelector('#ingredients').append(...accItems);