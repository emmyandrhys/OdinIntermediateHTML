var myLibrary = [{ title: 'My Side of the Mountain', author: 'Jean Craighead George', pages: 177, read: true, idNum: 0 },
{ title: 'Outdoor School Animal Watching', author: 'Mary Kay Carson', pages: 442, read: false, idNum: 1 },
{ title: 'Mary Poppins Comes Back', author: 'P.L. Travers', pages: 312, read: true, idNum: 2 },
{ title: 'Mary Poppins Opens the Door', author: 'P.L. Travers', pages: 269, read: true, idNum: 3 },
{ title: 'Chick Days', author: 'Jenna Woginrich', pages: 128, read: true, idNum: 4 },
	//{title: '', author: '', pages: , read: true, info: ''},
	//{title: '', author: '', pages: , read: true, info: ''},
	//{title: '', author: '', pages: , read: true, info: ''},
	//{title: '', author: '', pages: , read: true, info: ''},
];

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
	info() {
		return `'${title}' by ${author}, ${pages} pages, ${this.read ? 'read' : 'not read'}.`
	}
	addBookToLibrary() {
		let newBook = { title: this.title, author: this.author, pages: this.pages, read: this.read, idNum: myLibrary.length }
		myLibrary.push(newBook);
		return;
	}
};

const displayLibraryShelf = () => {
	let libraryShelf = document.getElementById('#shelf');
	myLibrary.forEach((book) => {
		const bookElement = document.createElement('div');
		bookElement.id = `book-${book.idNum}`;
		bookElement.classList.add('book_card');
		bookElement.
		const bookTitle = document.createElement('h2');
		bookTitle.classList.add('book_title');
		bookTitle.innerText = `${book.title}`;
		const bookAuthor = document.createElement('h3');
		bookAuthor.classList.add('book_author');
		bookAuthor.innerText = `${book.author}`;
		const bookPages = document.createElement('h3');
		bookPages.classList.add('book_pages');
		bookPages.innerText = `${book.pages} pages`;
		
		const bookRead = document.createElement('btn');
		bookRead.classList.add('book_read');
		if (book.read){
			bookRead.innerText = 'been read';
			bookRead.classList.add('read_true');
		}
		else {
			bookRead.innerText = 'not read';
			bookRead.classList = 'read_false';
		}
		bookRead.addEventListener('click',function(){
			let bookId = this.target.getAttribute('id').substring(5);
			if(!myLibrary[bookId][read]){
				this.target.innerText = 'been read';
				this.target.classList.add('read_true');
				this.target.classList.remove('read_false');
				myLibrary[bookId][read] = true;
			} 
		});

		const bookRemove = document.createElement('btn');
		bookRemove.classList.add('remove_book');
		bookRemove.innerText = 'Remove Book';
		bookRemove.addEventListener('click', removeBookfromLibrary)
		bookElement.appendChild(bookTitle);
		bookElement.appendChild(bookAuthor);
		bookElement.appendChild(bookPages)
		bookElement.appendChild(bookRead);
		bookElement.appendChild(bookRemove);
		libraryShelf.appendChild(bookElement)
	})
}