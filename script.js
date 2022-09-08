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

function addBookToLibrary(title,author,pages,read){
    newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
}

function displayLibrary(myLibrary){
    const DOMLibrary = document.querySelector(".library")
    myLibrary.forEach( book => {
        var bookContent = [book.title,book.author, book.pages, book.read]
        var DOMBook = document.createElement('div')
        DOMBook.classList.add("book")
        DOMBook.textContent = bookContent
        DOMLibrary.appendChild(DOMBook)
    });
}

addBookToLibrary("book1","author1",100,"yes")
addBookToLibrary("book2","author2",200,"yes")
displayLibrary(myLibrary)