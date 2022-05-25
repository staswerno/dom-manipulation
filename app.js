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

// querySelectorAll actually returns a Node List which CAN use forEach method
books.forEach((book) => console.log(book));

const books2 = document.querySelectorAll("#book-list li .name");

// note textContent property
// += appends instead of changes
books2.forEach((book) => {
	book.textContent += " (book title)";
});

const bookList2 = document.querySelector("#book-list");
// bookList.innerHTML = "<h2>BOOKS BOOKS BOOKS</h2>";
bookList2.innerHTML += "<p>this iz how add htlm</p>";
console.log(bookList2.innerHTML);

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

const bookList3 = document.querySelector("#book-list");

// includes line break
console.log("book-list next sibling is:", bookList3.nextSibling);

// doesn't include line break
console.log("book-list next element sibling is:", bookList3.nextElementSibling);

// includes line break
console.log("book-list previous sibling is:", bookList3.previousSibling);

// doesn't include line break
console.log(
	"book-list previous element sibling is:",
	bookList3.previousElementSibling
);

bookList3.previousElementSibling.querySelector("p").innerHTML +=
	"<br />too cool for not knights";

// events

let h2 = document.querySelector("#book-list h2");

h2.addEventListener("click", (e) => {
	console.log(e.target);
	console.log(e);
});

let btns = document.querySelectorAll("#book-list .delete");

// parent/child bit confusing but explained well in video 11 about 6min on
// more efficient method using event bubbling below

btns.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const li = e.target.parentElement;
		li.parentNode.removeChild(li);
	});
});

const link = document.querySelector("#page-banner a");

// prevents navigation to website
link.addEventListener("click", (e) => {
	e.preventDefault();
	console.log("navigation to ", e.target.textContent, " was prevented");
});

// event bubbling
// event always bubbles up to parent

// delete books
const list = document.querySelector("#book-list ul");
list.addEventListener("click", (e) => {
	if (e.target.className === "delete") {
		const li = e.target.parentElement;
		list.removeChild(li);
	}
});

// forms
// document.forms[index OR id]
// want to listen to the form's 'submit event'
// attach to form not button itself

// add book-list

const addForm = document.forms["add-book"];

addForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const value = addForm.querySelector('input[type="text"]').value;
	console.log(value);

	// create elements
	const li = document.createElement("li");
	const bookName = document.createElement("span");
	const deleteBtn = document.createElement("span");

	// add content
	deleteBtn.textContent = "delete";
	bookName.textContent = value;

	// add classes
	// can also .remove
	bookName.classList.add("name");
	deleteBtn.classList.add("delete");

	// append to document
	li.appendChild(bookName);
	li.appendChild(deleteBtn);
	list.appendChild(li);
});

// style
// li.style.color = "red"
// li.style.marginTop = "60px"
// li.className = "className"
// adding more bunches together - use classList

// attributes
