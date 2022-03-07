'use strict';

// CACHING DOM ELEMENTS
const form = document.getElementById("form");
const show_modal = document.querySelectorAll(".add-book-button");
const modal = document.querySelector(".modal");
const close_modal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const submit_button = document.querySelectorAll(".submit-book-button");

const title = document.getElementById('Title').value;
const author = document.getElementById('Author').value;
const pages = document.getElementById('Pages').value;
const read = document.getElementById('checkbox-read').checked;
const inputs = document.querySelectorAll('#Title, #Author, #Pages');

// MODAL WINDOW FUNCTIONALITY
//Function that opens the modal
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden'); //adds background blur to modal pop up by removing the hidden class that hides the blur
} 

//Function that closes the modal
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Loop to respond to a click event
for (let i = 0; i < show_modal.length; i++) {
    show_modal[i].addEventListener('click', openModal);
}

//Close button functionality
close_modal.addEventListener('click', closeModal);

//Closes modal window when clicking outside
overlay.addEventListener('click', closeModal);

//ESC Keypress Event - using addEvenListener on the document as a global event
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
})

// OBJECT ORIENTED PROGRAMMING LOGIC
// EVENT: ADD A BOOK
let myLibrary = [
    {
        title: 'Awaken the Giant Within',
        author: 'Tony Robbins',
        pages: 544,
        read: true
    },

    {
        title: 'The Laws of Human Nature',
        author: 'Robert Greene',
        pages: 588,
        read: false
    }
];

function Book() {
  // the constructor...
}

const addBookToLibrary = (e) => {
    e.preventDefault(); // prevents page reload when submitting a form

    let Book = {
        title: document.getElementById('Title').value,
        author: document.getElementById('Author').value,
        pages: document.getElementById('Pages').value,
        read: document.getElementById('checkbox-read').checked
    }

    myLibrary.push(Book);
    closeModal();
}

// Submit button click listener
form.addEventListener('submit', (e) => {    
    e.preventDefault(); 
    addBookToLibrary(e); // sends data to myLibrary
    form.reset(); // resets the form when submitted 
})


// EVENT: REMOVE A BOOK


// EVENT: MARKING A BOOK AS READ


// BOOK CLASS: REPRESENTS A BOOK


// UI CLASS: HANDLE UI TASKS


// STORE CLASS: HANDLES STORAGE


// EVENT: DISPLAY BOOKS
