const dataCreateBtn = document.querySelector('button[data-create]');
const dataDestroyBtn = document.querySelector('button[data-destroy]');
const dataBoxes = document.querySelector('#boxes');

dataCreateBtn.addEventListener('click', getAmountAndSetBoxes);
dataDestroyBtn.addEventListener('click', destroyBoxes);

function getAmountAndSetBoxes() {
	const amount = document.querySelector('#controls input').value;

	createBoxes(amount);
}
let initialSize;
function createBoxes(amount) {
	for (let i = 0; i < amount; i++) {
		initialSize += 10;
		const dataItem = document.createElement('div');
		dataItem.style.backgroundColor = getRandomHexColor();
		dataItem.style.width = `${initialSize}px`;
		dataItem.style.height = `${initialSize}px`;
		dataBoxes.append(dataItem);
	}
	initialSize = 20;
}

function destroyBoxes() {
	dataBoxes.innerHTML = '';
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
