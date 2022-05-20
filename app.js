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
