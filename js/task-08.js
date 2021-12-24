const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
	event.preventDefault();

	const formData = new FormData(event.currentTarget);

	formData.forEach((value, name) => {
		if (value === '') {
			alert('no empty fields allowed');
		}
		console.log('name:', name);
		console.log('value:', value);
	});

	form.reset();
});
