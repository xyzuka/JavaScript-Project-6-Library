"use strict";

// Modal window

const show_modal = document.querySelectorAll(".add-book-button");
const modal = document.querySelector(".modal");
const close_modal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener("click", openModal);
}

close_modal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Data Structures and Algo

// Default book storage

// Book class: Represents a book
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Hard coded default display books
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

// UI class: Handles UI class
class UI {
  static updateDisplay() {
    myLibrary.forEach((book) => UI.addBookToDisplay(book));
  }

  static addBookToDisplay(book) {
    // Creating a card (without styling)
    const bookListContainer = document.querySelector(".book-list-container");
    const bookContainer = document.createElement("div");
    const bookTitleContainer = document.createElement("div");
    const bookTitle = document.createElement("span");
    const bookName = document.createElement("span");
    const authorContainer = document.createElement("div");
    const authorTitle = document.createElement("span");
    const authorName = document.createElement("span");
    const pagesContainer = document.createElement("div");
    const pagesTitle = document.createElement("span");
    const pages = document.createElement("span");
    const buttonsContainer = document.createElement("div");
    const readButton = document.createElement("button");
    const removeButton = document.createElement("button");

    // Adding styles to the card
    bookContainer.classList.add("book-container-card");
    bookTitle.textContent = "Book Title:";

    bookTitleContainer.classList.add("book-title-container");

    bookName.textContent = ` ${book.title}`;
    bookTitle.classList.add("title");
    bookName.classList.add("book-name");

    authorContainer.classList.add("author-container");

    authorTitle.textContent = "Author:";
    authorName.textContent = ` ${book.author}`;
    authorTitle.classList.add("title");
    authorName.classList.add("title-name");

    pagesContainer.classList.add("pages-container");

    pagesTitle.textContent = "Pages:";
    pages.textContent = ` ${book.pages}`;
    pagesTitle.classList.add("title");
    pages.classList.add("pages");

    buttonsContainer.classList.add("buttons-container");
    // Read or unread button
    if (book.read) {
      readButton.classList.add("read-button-green");
      readButton.classList.add("button");
      readButton.textContent = "Read";
    } else {
      readButton.classList.add("unread-button-red");
      readButton.classList.add("button");
      readButton.textContent = "Unread";
    }

    // Read or unread button toggle
    readButton.addEventListener("click", toggleReadButton);

    function toggleReadButton() {
        book.read = !book.read;
        console.log(book.read);
        
        if (book.read === false) {
            readButton.classList.remove("read-button-green");
            readButton.classList.add("unread-button-red");
            readButton.textContent = "Unread";
        } else {
            readButton.classList.remove("unread-button-red");
            readButton.classList.add("read-button-green");
            readButton.textContent = "Read";
        }

    }

    // Remove button
    removeButton.classList.add("button");
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove";

    // Appending newly created book spans
    bookContainer.appendChild(bookTitleContainer);
    bookTitleContainer.appendChild(bookTitle);
    bookTitleContainer.appendChild(bookName);

    bookContainer.appendChild(authorContainer);
    authorContainer.appendChild(authorTitle);
    authorContainer.appendChild(authorName);

    bookContainer.appendChild(pagesContainer);
    pagesContainer.appendChild(pagesTitle);
    pagesContainer.appendChild(pages);

    bookContainer.appendChild(buttonsContainer);
    buttonsContainer.appendChild(readButton);
    buttonsContainer.appendChild(removeButton);

    bookListContainer.appendChild(bookContainer);
  }
}

// Event: Add a book
form.addEventListener("submit", (e) => {
  // Prevent actual submit
  e.preventDefault();

  // Get form values
  const form = document.getElementById("form");
  const title = document.getElementById("Title").value;
  const author = document.getElementById("Author").value;
  const pages = document.getElementById("Pages").value;
  const read = document.getElementById("checkbox-read").checked;

  // Instantiate new book
  const newBook = new Book(title, author, pages, read);

  // Resets form when submitted
  form.reset();

  // Sends new book to be stored in the library
  myLibrary.push(newBook);

  // Add book to UI
  UI.addBookToDisplay(newBook);

  // Closes modal
  closeModal();
});

// Event: Displays books
UI.updateDisplay();
