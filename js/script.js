let myLibrary = [];
let generatedHtml = '';
const authorInput = document.getElementById('author');
const titleInput = document.getElementById('title');
const pageInput = document.getElementById('page');
const addBook = document.getElementById('addBook');
const modalFlex = document.getElementById('add');
const modalNone = document.getElementById('close');

function Book(title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
}

function updateDisplay() {
    for(let book of myLibrary) {
        generatedHtml = `<div class="book">
                            <h2 class="title">${book.title}</h2>
                            <p class="author">${book.author}</p>
                            <p class="pages">${book.numberOfPages}</p>
                        </div>`;
    };

    document.querySelector('.main').innerHTML += generatedHtml;
}

function addBookToLibrary(title, author, numberOfPages) {
    if (isEmpty(title) || isEmpty(author) || isEmpty(numberOfPages)) return;
    myLibrary.push(new Book(title, author, numberOfPages));
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
}

function clearInput() {
    titleInput.value = '';
    authorInput.value = '';
    pageInput.value = '';
}

function isEmpty(str) {
    return !str.trim().length;
}

function showModal() {
    if (document.querySelector('.bg-modal').style.display == 'flex') return;
    document.querySelector('.bg-modal').style.setProperty('display', 'flex');
}

function hideModal() {
    if (document.querySelector('.bg-modal').style.display == 'none') return;
    document.querySelector('.bg-modal').style.setProperty('display', 'none');
}

// TODO: Fix issue that after adding new book, add button does not work anymore 
addBook.addEventListener('click', function() {
    addBookToLibrary(titleInput.value, authorInput.value, pageInput.value);
    updateDisplay();
    clearInput();
});

modalFlex.addEventListener('click', function() {
  console.log(`Hello, World!`);
  showModal();
});

modalNone.addEventListener('click', function() {
  hideModal();
});