let myLibrary = [];

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        let info = `${title} by ${author}, ${pages} pages, ${read}`
        return info
    };
};

function addBookToLibrary(){
    const form = document.querySelector(".popup-form")
    form.classList.remove("form-open")
    let title = document.querySelector("#title")
    let author = document.querySelector("#author")
    let pages = document.querySelector("#pages")
    newBook = new Book(title.value,author.value,pages.value,read.value)
    myLibrary.push(newBook)
    displayLibrary(myLibrary)
}

function displayLibrary(myLibrary){
    const DOMLibrary = document.querySelector(".library")
    clearLibrary(DOMLibrary)
    myLibrary.forEach( book => {
        let id = myLibrary.indexOf(book)
        let bookContent = [id,book.title,book.author, book.pages, book.read]
        let DOMBook = document.createElement('div')
        let buttonRemove = document.createElement('button')
        DOMBook.classList.add("book")
        DOMBook.textContent = bookContent
        buttonRemove.textContent = "Remove"
        buttonRemove.addEventListener("click", removeBook)
        DOMBook.appendChild(buttonRemove)
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

function removeBook(id){
    myLibrary.splice(id, 1)
    displayLibrary(myLibrary)
}



addButton = document.querySelector(".add-button")
addButton.addEventListener("click", openForm)
submitButton = document.querySelector("#submit")
submitButton.addEventListener("click", addBookToLibrary)


