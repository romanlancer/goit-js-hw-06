const categoriesRef = document.querySelector('#categories');
const categoriesItemsRef = categoriesRef.querySelectorAll('.item');
const categoriesTitlesRef = document.querySelectorAll('.item h2');
const categoriesItemsListRef = document.querySelectorAll('.item ul');
const categoriesItemsListAnimalsRef =
	categoriesItemsListRef[0].querySelectorAll('li');
const categoriesItemsListProductsRef =
	categoriesItemsListRef[1].querySelectorAll('li');
const categoriesItemsListTechnologiesRef =
	categoriesItemsListRef[2].querySelectorAll('li');
console.log('Number of categories:', categoriesItemsRef.length);
console.log('Category:', categoriesTitlesRef[0].textContent);
console.log('Elements:', categoriesItemsListAnimalsRef.length);
console.log('Category:', categoriesTitlesRef[1].textContent);
console.log('Elements:', categoriesItemsListProductsRef.length);
console.log('Category:', categoriesTitlesRef[2].textContent);
console.log('Elements:', categoriesItemsListTechnologiesRef.length);
