const blrw = document.querySelector("#book-list li:nth-child(2) .name");
console.log(blrw);

// querySelector only returns ONE element!
let books = document.querySelector("#book-list li .name");
console.log(books);

// ALL returns collection
books = document.querySelectorAll("#book-list li .name");
console.log(books);

// see arraynotes.js for Array.from info
Array.from(books).forEach((book) => console.log(book));
