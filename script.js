let myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        var info = `${title} by ${author}, ${pages} pages, ${read}`
        return info
    };
};

function addBookToLibrary(){
    const form = document.querySelector(".popup-form")
    form.classList.remove("form-open")
    var title = document.querySelector("#title")
    var author = document.querySelector("#author")
    var pages = document.querySelector("#pages")
    newBook = new Book(title.value,author.value,pages.value,read.value)
    myLibrary.push(newBook)
    displayLibrary(myLibrary)
}

function displayLibrary(myLibrary){
    const DOMLibrary = document.querySelector(".library")
    clearLibrary(DOMLibrary)
    myLibrary.forEach( book => {
        var bookContent = [book.title,book.author, book.pages, book.read]
        var DOMBook = document.createElement('div')
        DOMBook.classList.add("book")
        DOMBook.textContent = bookContent
        DOMLibrary.appendChild(DOMBook)
    });
}

function clearLibrary(DOMLibrary){
    while (DOMLibrary.hasChildNodes()) {
        DOMLibrary.removeChild(DOMLibrary.lastChild)
      }
}

function openForm(){
    const form = document.querySelector(".popup-form")
    form.classList.add("form-open")
}



addButton = document.querySelector(".add-button")
addButton.addEventListener("click", openForm)
submitButton = document.querySelector("#submit")
submitButton.addEventListener("click", addBookToLibrary)


