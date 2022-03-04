'use strict';

// MODAL WINDOW FUNCTIONALITY
// Caching DOM elements
const show_modal = document.querySelectorAll(".add-book-button");
const modal = document.querySelector(".modal");
const close_modal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

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
