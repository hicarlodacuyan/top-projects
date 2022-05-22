let myLibrary = [];
let generatedHtml = '';

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

function updateDisplay() {
    for (let item of myLibrary) {
        generatedHtml += `<div class="book">
                            <div class="author">${item.author}</div>
                            <div class="title">${item.title}</div>
                            <div class="pages">${item.numberOfPages}</div>
                        </div>`;
    };

    document.querySelector('.container').innerHTML = generatedHtml;
}

addBookToLibrary('J. K. Rowling', 'Harry Potter and the Sorcerer\'s Stone', '223');
addBookToLibrary('J. K. Rowling', 'Harry Potter and the Sorcerer\'s Stone', '223');
addBookToLibrary('J. K. Rowling', 'Harry Potter and the Sorcerer\'s Stone', '223');