let myLibrary = [];
let generatedHtml = '';
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pageInput = document.getElementById('page');
const addButton = document.getElementById('add');

function Book(author, title, numberOfPages) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
}

function updateDisplay() {
    for(let book of myLibrary) {
        generatedHtml = `<div class="book">
                            <div class="author">${book.author}</div>
                            <div class="title">${book.title}</div>
                            <div class="pages">${book.numberOfPages}</div>
                        </div>`;
    };

    document.querySelector('.container').innerHTML += generatedHtml;
}

function addBookToLibrary(author, title, numberOfPages) {
    myLibrary.push(new Book(author, title, numberOfPages));
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
}

function clearInput() {
    authorInput.value = '';
    titleInput.value = '';
    pageInput.value = '';
}

addButton.addEventListener('click', function() {
    addBookToLibrary(authorInput.value, titleInput.value, pageInput.value);
    updateDisplay();
    clearInput();
});