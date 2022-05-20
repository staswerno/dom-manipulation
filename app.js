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
