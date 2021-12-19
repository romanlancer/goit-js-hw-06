const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const ingredientsFirstItem = document.createElement('li');
ingredientsFirstItem.textContent = ingredients[0];
ingredientsFirstItem.classList = 'item';
const ingredientsSecondItem = document.createElement('li');
ingredientsSecondItem.textContent = ingredients[1];
ingredientsSecondItem.classList = 'item';
const ingredientsThirdItem = document.createElement('li');
ingredientsThirdItem.textContent = ingredients[2];
ingredientsThirdItem.classList = 'item';
const ingredientsFourthItem = document.createElement('li');
ingredientsFourthItem.textContent = ingredients[3];
ingredientsFourthItem.classList = 'item';
const ingredientsFifthItem = document.createElement('li');
ingredientsFifthItem.textContent = ingredients[4];
ingredientsFifthItem.classList = 'item';
const ingredientsSixthItem = document.createElement('li');
ingredientsSixthItem.textContent = ingredients[5];
ingredientsSixthItem.classList = 'item';

ingredientsList.append(
	ingredientsFirstItem,
	ingredientsSecondItem,
	ingredientsThirdItem,
	ingredientsFourthItem,
	ingredientsFifthItem,
	ingredientsSixthItem,
);
