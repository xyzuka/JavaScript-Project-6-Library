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

// Book class: Represents a book
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// UI class
class UI {
  static updateDisplay() {
    for (let i = 0; i < myLibrary.length; i++) {
      this.addBookToDisplay(myLibrary[i]);
    }
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

    bookTitleContainer.classList.add("book-title-container");

    bookTitle.textContent = "Book Title:";
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

    // Event: Read or unread status changed
    readButton.addEventListener("click", toggleReadButton);

    function toggleReadButton() {
      book.read = !book.read;
      // console.log(book.read);

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

    // Event: Removes a book
    removeButton.addEventListener("click", removeBook);

    // Removes selected book from the storage array
    function removeBook() {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      UI.resetDisplay();
    }
  }

  // Resets the DOM by deleting ALL child elements and "resets" the display
  static resetDisplay() {
    const bookListContainer = document.querySelector(".book-list-container");
    // remove everything in the parent container to re-run updateDisplay
    bookListContainer.querySelectorAll('*').forEach(n => n.remove());
    UI.updateDisplay(myLibrary);
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

  // Sends new book to be stored in the library
  myLibrary.push(newBook);

  // Resets form when submitted
  form.reset();

  // Add book to UI
  UI.addBookToDisplay(newBook);

  // Send data to local storage
  sendData(newBook);

  // Closes modal
  closeModal();
});

// Event: Displays books
UI.updateDisplay();

// Local Storage: Sending myLibrary to local storage
function sendData() {
  // to store an entire javascript object, we need to convert it to strings with JSON.stringify
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

// Local Storage: Removing item from local storage when remove is clicked
function removeData() {}

// Local Storage: Pulls data from myLibrary when page is refreshed
function restoreData() {
  // retrieving object from the storage and converting it to an object with JSON.parse
  if (localStorage.myLibrary) {
    let books = JSON.parse(localStorage.getItem(`myLibrary`));
    console.table(books);
    UI.addBookToDisplay(books);
  }
  return;
}

// restoreData();
