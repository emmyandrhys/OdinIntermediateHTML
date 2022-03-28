let myLibrary = [];

const BookMaker(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${title} by ${author}, ${pages} pages, ${read}`
		}
}

function Book(title, author, pages, read){
		let book = {};
		book.title = title;
		book.author = author;
		book.pages = pages;
		book.read = read;
		book.info = bookMaker.info

		return book;
	}

function addBookToLibrary() {

}