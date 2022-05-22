let myLibrary = [];

function Book(author, title, numberOfPages) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
}

function addBookToLibrary(author, title, numberOfPages) {
    myLibrary.push(new Book(author, title, numberOfPages));
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
}

addBookToLibrary('J. K. Rowling', 'Harry Potter and the Sorcerer\'s Stone', '223');
addBookToLibrary('J. K. Rowling', 'Harry Potter and the Sorcerer\'s Stone', '223');
addBookToLibrary('J. K. Rowling', 'Harry Potter and the Sorcerer\'s Stone', '223');
removeBookFromLibrary(1);

console.log(myLibrary);