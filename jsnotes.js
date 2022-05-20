var titles = document.getElementsByClassName("title");

console.log(Array.isArray(titles)); // false
console.log(Array.isArray(Array.from(titles))); // true

// so! (using forEach directly on titles won't work otherwise)

Array.from(titles).forEach((element) => {
	console.log(element);
});

const blrw = document.querySelector("#book-list li:nth-child(2) .name");
console.log(blrw);

// querySelector only returns ONE element!
let books = document.querySelector("#book-list li .name");
console.log(books);

// ALL returns collection
books = document.querySelectorAll("#book-list li .name");
console.log(books);

// see arraynotes.js for Array.from info
// querySelectorAll actually returns a Node List which CAN use forEach method
books.forEach((book) => console.log(book));
