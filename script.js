let myLibrary = [];

class Book{

    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    info(){
        let info = `${title} by ${author}, ${pages} pages, ${read}`
        return info
    };
}

function displayLibrary(myLibrary){
    const DOMLibrary = document.querySelector(".library")
    clearLibrary(DOMLibrary)
    myLibrary.forEach( book => {

        let DOMBook = document.createElement('div')
        DOMBook.classList.add("book")

        let bookTitle = document.createElement('div')
        bookTitle.textContent = book.title
        bookTitle.classList.add("title")

        let bookAuthor = document.createElement('div')
        bookAuthor.textContent = `by ${book.author}`
        bookAuthor.classList.add("author")

        let bookPages = document.createElement('div')
        bookPages.textContent = `${book.pages} pages`
        bookPages.classList.add("pages")
        
        let buttonToggleRead = document.createElement('button')
        if (book.read === "Read"){
            buttonToggleRead.classList.add("greenRead")
        } else {
            buttonToggleRead.classList.add("redRead")
        }
        buttonToggleRead.textContent = book.read
        
        buttonToggleRead.addEventListener("click", function toggleRead(){
            if (buttonToggleRead.textContent === "Read"){
                buttonToggleRead.textContent = "Not read"
                book.read = "Not read"
                buttonToggleRead.classList.add("redRead")
                buttonToggleRead.classList.remove("greenRead")
                return
            } else if (buttonToggleRead.textContent === "Not read"){
                buttonToggleRead.textContent = "Read"
                book.read = "Read"
                buttonToggleRead.classList.add("greenRead")
                buttonToggleRead.classList.remove("redRead")

            }
            }
        )

        let buttonRemove = document.createElement('button')
        buttonRemove.textContent = "X"
        buttonRemove.classList.add("removeButton")
        buttonRemove.addEventListener("click", function removeBook(e){
            myLibrary.splice(e, 1)
            DOMBook.remove()
            
        })

        DOMBook.appendChild(bookTitle)
        DOMBook.appendChild(bookAuthor)
        DOMBook.appendChild(bookPages)
        DOMBook.appendChild(buttonToggleRead)
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
    const popupForm = document.querySelector(".popup-form")
    popupForm.classList.add("form-open")
}


addButton = document.querySelector(".add-button")
addButton.addEventListener("click", openForm)

const form = document.querySelector('form')
const formElements = document.querySelectorAll('input')

formElements.forEach((element) => addEventListener("input", (e) => {
    let elementError = document.querySelector(`#${element.id} + span.error`)
    if(element.validity.valid){
        elementError.textContent = ""
        elementError.className = "error"
    } else {
        showError(element, elementError)
    }
}))

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true
    formElements.forEach((element) => {
        let elementError = document.querySelector(`#${element.id} + span.error`)
        if(!element.validity.valid){
            showError(element, elementError)
            valid = false
        }
    })
    console.log(valid)
    if(valid == true){
        const form = document.querySelector(".popup-form")
        form.classList.remove("form-open")
        let title = document.querySelector("#title")
        let author = document.querySelector("#author")
        let pages = document.querySelector("#pages")
        let read = document.querySelector("#read")
        if (read.checked){
            read = "Read"
        } else {
            read = "Not read"
        }
        newBook = new Book(title.value,author.value,pages.value,read)
        myLibrary.push(newBook)
        displayLibrary(myLibrary)
    }
})

function showError(element, elementError){
    if(element.validity.valueMissing){
        elementError.textContent = `Please enter ${element.name}`
    } else if(element.validity.stepMismatch) {
        elementError.textContent = "Please enter a whole number of pages"
    } else if(element.validity.rangeUnderflow){
        elementError.textContent = "Minimum pages is 1"
    } else {
        elementError.textContent = "Please enter a number"
    }
    elementError.className = "error active"
}