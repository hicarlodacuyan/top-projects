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
    this.readStatus = false;
}

Book.prototype.changeReadStatus = function() {
    if(this.readStatus === false) {
        this.readStatus = true;
    } else {
        this.readStatus = false;
    }
}

function updateDisplay() {
    for(let [i, book] of myLibrary.entries()) {
        generatedHtml = `<div id="book${i}" class="book">
                            <div class="remove-book" onclick="removeBookFromLibrary(${i})">&times;</div>
                            <h2 class="title">${book.title}</h2>
                            <p class="author">${book.author}</p>
                            <p class="pages">${book.numberOfPages}</p>
                            <button id="toggle${i}" class="toggle" role="switch" aria-checked="false" onclick="toggleReadStatus(${i})">&#10003;</button>
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

function toggleReadStatus (index) {
    myLibrary[index].changeReadStatus();
    if(myLibrary[index].readStatus === true) {
        document.getElementById(`book${index}`).style.background = 'gray';
        document.getElementById(`toggle${index}`).style.color = 'green';
        document.getElementById(`toggle${index}`).style.fontWeight = 'bolder';
    } else {
        document.getElementById(`book${index}`).style.background = 'yellow';
        document.getElementById(`toggle${index}`).style.color = 'black';
        document.getElementById(`toggle${index}`).style.fontWeight = '400';
    }
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