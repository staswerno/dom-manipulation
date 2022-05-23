const bookList = document.querySelector("#book-list");

// includes line break
console.log("book-list next sibling is:", bookList.nextSibling);

// doesn't include line break
console.log("book-list next element sibling is:", bookList.nextElementSibling);

// includes line break
console.log("book-list next sibling is:", bookList.previousSibling);

// doesn't include line break
console.log(
	"book-list next element sibling is:",
	bookList.previousElementSibling
);

bookList.previousElementSibling.querySelector("p").innerHTML +=
	"<br />too cool for not knights";
