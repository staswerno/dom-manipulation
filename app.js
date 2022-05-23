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
