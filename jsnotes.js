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

const books = document.querySelectorAll("#book-list li .name");

// note textContent property
// += appends instead of changes
books.forEach((book) => {
	book.textContent += " (book title)";
});

const bookList = document.querySelector("#book-list");
// bookList.innerHTML = "<h2>BOOKS BOOKS BOOKS</h2>";
bookList.innerHTML += "<p>this iz how add htlm</p>";
console.log(bookList.innerHTML);

const banner = document.querySelector("#page-banner");
console.log(`#page-banner node type is ${banner.nodeType}`);
console.log(`#page-banner node name is ${banner.nodeName}`);
console.log(`#page-banner has child nodes? ${banner.hasChildNodes()}`);

// clone a node
// without passing true, does not include nested content
const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

// traversing the dom - to parents and children

const bookList = document.querySelector("#book-list");

// ususally will return the same element
// can chan to go up levels

console.log("the parent node is: ", bookList.parentNode);
console.log("the parent node is: ", bookList.parentElement);
console.log("the parent node is: ", bookList.parentElement.parentElement);

// text in console are linebreaks so...
console.log(bookList.childNodes);

// ...use this instead
console.log(bookList.children);
