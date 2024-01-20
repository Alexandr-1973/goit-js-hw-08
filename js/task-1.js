const needCategories = document
  .querySelector('ul#categories')
  .querySelectorAll('.item');
console.log(`Number of categories: ${needCategories.length}`);

needCategories.forEach(elem => {
  console.log(`Category: ${elem.querySelector('h2').textContent}`);
  console.log(`Elements: ${elem.querySelectorAll('li').length}`);
});
