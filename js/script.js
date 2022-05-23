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
    const wrapper = document.createElement('div');
    wrapper.innerHTML = generatedHtml;
    const book = wrapper.firstChild; 
    document.querySelector('.main').prepend(book);
}

function addBookToLibrary(title, author, numberOfPages) {
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

function showModal() {
    if (document.querySelector('.bg-modal').style.display == 'flex') return;
    document.querySelector('.bg-modal').style.setProperty('display', 'flex');
}

function hideModal() {
    if (document.querySelector('.bg-modal').style.display == 'none') return;
    document.querySelector('.bg-modal').style.setProperty('display', 'none');
}

addBook.addEventListener('click', function() {
    if (titleInput.value == '' && authorInput.value == '' && pageInput.value == '') return;
    addBookToLibrary(titleInput.value, authorInput.value, pageInput.value);
    updateDisplay();
    clearInput();
    hideModal();
});

modalFlex.addEventListener('click', function() {
  showModal();
});

modalNone.addEventListener('click', function() {
  hideModal();
});