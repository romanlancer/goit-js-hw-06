
const bodyColor = document.querySelector('body');
const colorOutput = document.querySelector('.color');
const colorInput = document.querySelector('.change-color');

colorInput.addEventListener('click', onTargetBtn);

function onTargetBtn() {
	bodyColor.style.backgroundColor = getRandomHexColor();
	colorOutput.textContent = getRandomHexColor();
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
