const newButton = document.querySelector('.new');
const bookD = document.querySelector('.book');
const removeButton = document.querySelector('.remove');
const titleD = document.querySelector('.title');
const authorD = document.querySelector('.author');
const addButton = document.querySelector('#sub');
const form = document.getElementById('form');
const titleinp = document.getElementById('title');
const authorinp = document.getElementById('author');
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
    console.log(titleP);
    console.info(myLibrary);
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