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
    for(let [i, book] of myLibrary.entries()) {
        generatedHtml = `<div id="book${i}" class="book">
                            <div class="remove-book" onclick="removeBookFromLibrary(${i})">&times;</div>
                            <h2 class="title">${book.title}</h2>
                            <p class="author">${book.author}</p>
                            <p class="pages">${book.numberOfPages}</p>
                        </div>`;
    };
    const wrapper = document.createElement('div');
    wrapper.innerHTML = generatedHtml;
    const book = wrapper.firstChild; 
    document.querySelector('.main').prepend(book);
}

function addBookToLibrary(title, author, numberOfPages) {
    myLibrary.push(new Book(title, author, numberOfPages));
}

function removeBookFromLibrary(index) {
    myLibrary.length === 1 ?  myLibrary.pop() : myLibrary.splice(index, 1);
    document.getElementById(`book${index}`).remove();
}

function clearInput() {
    titleInput.value = '';
    authorInput.value = '';
    pageInput.value = '';
}

function showModal() {
    document.querySelector('.bg-modal').style.setProperty('display', 'flex');
}

function hideModal() {
    document.querySelector('.bg-modal').style.setProperty('display', 'none');
}

addBook.addEventListener('click', function() {
    if (titleInput.value == '' || authorInput.value == '' || pageInput.value == '') return;
    addBookToLibrary(titleInput.value, authorInput.value, pageInput.value);
    updateDisplay();
    clearInput();
    hideModal();
});

modalFlex.addEventListener('click', function() {
    showModal();
});

modalNone.addEventListener('click', function() {
    clearInput();
    hideModal();
});