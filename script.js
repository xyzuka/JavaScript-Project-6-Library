"use strict";

// MODAL WINDOWS
const show_modal = document.querySelectorAll(".add-book-button");
const modal = document.querySelector(".modal");
const close_modal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden"); //adds background blur to modal pop up by removing the hidden class that hides the blur
};

//Function that closes the modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Loop to respond to a click event
for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener("click", openModal);
}

//Close button functionality
close_modal.addEventListener("click", closeModal);

//Closes modal window when clicking outside
overlay.addEventListener("click", closeModal);

//ESC Keypress Event - using addEvenListener on the document as a global event
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// DATA STRUCTURES AND ALGO
const form = document.getElementById("form");
const submit_button = document.querySelectorAll(".submit-book-button");
const title = document.getElementById("Title").value;
const author = document.getElementById("Author").value;
const pages = document.getElementById("Pages").value;
const read = document.getElementById("checkbox-read").checked;

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Default book storage
let myLibrary = [
  {
    title: "Awaken the Giant Within",
    author: "Tony Robbins",
    pages: 544,
    read: true,
  },

  {
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    pages: 588,
    read: false,
  },
];

const addBookToLibrary = (e) => {
  e.preventDefault(); // prevents page reload when submitting a form

  let Book = {
    title: document.getElementById("Title").value,
    author: document.getElementById("Author").value,
    pages: document.getElementById("Pages").value,
    read: document.getElementById("checkbox-read").checked,
  };

  myLibrary.push(Book);
  closeModal();
};

// Submit button click listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary(e); // sends data to myLibrary
  form.reset(); // resets the form when submitted
});

// UI
