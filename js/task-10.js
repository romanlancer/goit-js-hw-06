//  <div id="controls">
//     <input type="number" min="1" max="100" step="1" />
//     <button type="button" data-create>Create</button>
//     <button type="button" data-destroy>Destroy</button>
//   </div>

//   <div id="boxes"></div>
const controlsInput = document.querySelector('#controls input');
const dataCreateBtn = document.querySelector('button[data-create]');
const dataDestroyBtn = document.querySelector('button[data-destroy]');
const dataBoxes = document.querySelector('#boxes');

controlsInput.addEventListener('input', event => {
	let amount = event.currentTarget.value;

	console.log(amount);
});

dataCreateBtn.addEventListener('click', createBoxes);
dataDestroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
	const dataItem = document.createElement('div');
	dataItem.style.backgroundColor = getRandomHexColor();
	return dataBoxes.appendChild(dataItem);
	console.log(dataBoxes.append(dataItem));
}

// createBoxes(amount);
function destroyBoxes() {
	dataBoxes.innerHTML = '';
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
