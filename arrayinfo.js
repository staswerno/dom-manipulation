var titles = document.getElementsByClassName("title");

console.log(Array.isArray(titles)); // false
console.log(Array.isArray(Array.from(titles))); // true

// so! (using forEach directly on titles won't work otherwise)

Array.from(titles).forEach((element) => {
	console.log(element);
});
