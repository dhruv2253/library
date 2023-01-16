const newButton = document.querySelector('.new');
const bookD = document.querySelector('.book');
const titleD = document.querySelector('.title');
const authorD = document.querySelector('.author');
const addButton = document.querySelector('#sub');
const form = document.getElementById('form');
const titleinp = document.getElementById('title');
const authorinp = document.getElementById('author');
const container = document.querySelector('.container');
let myLibrary = [];

function Book( titleP, authorP) {
    title = titleP;
    author = authorP;
}

function addBookToLibrary(){
    event.preventDefault();
    let titleP = titleinp.value;
    let authorP = authorinp.value;
    newBook = new Book(titleP, authorP);
    myLibrary.push(newBook);
    createBook();
}

newButton.addEventListener('click', () => {
    console.log("3");
    if (form.style.display === 'none'){
        form.style.display = 'block';
    }
    else {
        form.style.display = 'none';
    }
});

form.addEventListener('submit', addBookToLibrary);

function createBook(){
    const book = document.createElement('div');
    book.classList.add("book");
    const title = document.createElement('div');
    title.classList.add("title");
    const author = document.createElement('div');
    author.classList.add("author");
    const xButton = document.createElement('button');
    xButton.classList.add("remove");
    xButton.textContent = 'X';
    title.textContent = titleinp.value;
    author.textContent = authorinp.value;
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(xButton);
    container.appendChild(book);
    xButton.addEventListener('click', () => {
        xButton.parentElement.remove(); 
    });
}

