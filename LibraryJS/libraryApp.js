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
//book class constructor and methods
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
	removeBookFromLibrary(id){
		myLibrary.splice(id, 1);
	}
};

// modal close buttons
const closeBtns = document.querySelectorAll('.close-btn');
closeBtns.forEach((btn)=>{btn.addEventListener('click', (e) => e.target.parentElement.classList.add('hidden'))})
//add book button to open form
const addBookBtn = document.getElementById('add-book-btn');
addBookBtn.addEventListener('click',()=>formModal.classList.remove('hidden'));
// grab form
const form  = document.getElementById('add-book');
//form modal
const formModal = document.getElementById('book-form');
//duplicate book modal
const dupBook = document.getElementById('duplicate-book-warning');
//need more info modal
const needInfo = document.getElementById('need-info-warning');
// remove book confirmation modal
const removeConfirmModal = document.getElementById('book-removal-warning');
const confirmRemove = document.getElementById('confirm-remove');
const cancelRemove = document.getElementById('cancel-remove');

const removeBookModal = (e) => {
	//book removal confirmation modal
	removeConfirmModal.classList.remove('hidden');
	//get book to be removed
	confirmRemove.setAttribute('data-idNum', e.target.getAttribute('data-idNum'));
	//add event listeners for confirmation buttons
	confirmRemove.addEventListener('click', removeBookConfirmation);
	cancelRemove.addEventListener('click', () => {
		confirmRemove.removeAttribute('data-idNum');
		removeConfirmModal.classList.add('hidden');
	});
}

const removeBookConfirmation = () => {
	//hide removal confirmation modal
	removeConfirmModal.classList.add('hidden');
	let book = confirmRemove.getAttribute('data-idNum')
	document.getElementById(`book-${book}`).classList.add('hidden');
	confirmRemove.removeAttribute('data-idNum');
	confirmRemove.removeEventListener('click', removeBookConfirmation);
	removeBookFromLibrary(book);
}

const changeRead = (e) => {
	let bookId = e.target.getAttribute('data-idNum');
	if(e.target.getAttribute('data-read') ==='false'){
		e.target.innerText = 'Read book';
		e.target.removeAttribute('data-read')
		e.target.setAttribute('data-read','true');
		myLibrary[bookId][read] = true;
	}
}
//function to create each book card
const createBookCard = (book) => {
	// Create card for book
	const bookElement = document.createElement('div');
	bookElement.id = `book-${book.idNum}`;
	bookElement.classList.add('book_card');
	bookElement.setAttribute('data-idNum',book.idNum);
	// Add Book title to card
	const bookTitle = document.createElement('h2');
	bookTitle.classList.add('book_title');
	bookTitle.innerText = `${book.title}`;
	bookTitle.setAttribute('data-idNum',book.idNum)
	// Add Book author to card
	const bookAuthor = document.createElement('h3');
	bookAuthor.classList.add('book_author');
	bookAuthor.innerText = `${book.author}`;
	bookAuthor.setAttribute('data-idNum',book.idNum)
	//Add number of pages in book to card
	const bookPages = document.createElement('h3');
	bookPages.classList.add('book_pages');
	bookPages.innerText = `${book.pages} pages`;
	bookPages.setAttribute('data-idNum',book.idNum)
	//add if book was read or not to card
	const bookRead = document.createElement('button');
	bookRead.classList.add('book_read');
	bookRead.id = `read-${book.idNum}`;
	bookRead.setAttribute('data-idNum',book.idNum)
	if (book.read){
		bookRead.innerText = 'Read book.';
		bookRead.setAttribute('data-read', 'true');
	} else {
		bookRead.innerText = "Not read yet.";
		bookRead.setAttribute('data-read', 'false');
	}
	//add event listener to toggle if book was read or not
	bookRead.addEventListener('click',changeRead);
	//add remove book button to card
	const bookRemove = document.createElement('button');
	bookRemove.classList.add('remove_book');
	bookRead.id = `remove-${book.idNum}`;
	bookRemove.innerText = 'Remove Book';
	bookRemove.setAttribute('data-idNum',book.idNum);
	//add event listener to remove book from libary
	bookRemove.addEventListener('click', removeBookModal)
	//append card components to card
	bookElement.appendChild(bookTitle);
	bookElement.appendChild(bookAuthor);
	bookElement.appendChild(bookPages)
	bookElement.appendChild(bookRead);
	bookElement.appendChild(bookRemove);
	//return book card to shelf
	return bookElement
}

//title case function for formatting title and author input
function titleCase(str){
	str = str.toLowerCase();
	let words = str.split(/\b/);
	if (words[0].length > 1) {
		var titled = words[0][0].toUpperCase() + words[0].substring(1)
	} else {
		var titled = words[0].toUpperCase();
	}
	for (let n = 1; n < words.length; n++){
		if (words[n] === 'a' || words[n] === 'an' || words[n] === 'the' || words[n] === 'and'){
			titled += ' ' + words[n]
		} else if (words[n].length > 1){
			titled += ' ' + words[n][0].toUpperCase() + words[n].substring(1)
		} else {
			titled += ' ' + words[n].toUpperCase()
		}
	} return titled;
}

//render book cards to shelf
const libraryShelf = document.getElementById('shelf');
myLibrary.forEach((book) => {
	libraryShelf.appendChild(createBookCard(book))
	})

//grab data from form to add books to database
form.addEventListener('submit', (event) => {
  // handle the form data
	let formData = document.getElementById('add-book').elements
	let formTitle = formData[0].value;
	let formAuthor = formData[1].value;
	let formPages = formData[2].value;
	let formReadYes = formData[4].checked;
	let formReadNo = formData[5].checked;

  //check for missing fields in the form data
	if (formAuthor ==='' || formTitle === ''){
		needInfo.classList.remove('hidden')
		event.preventDefault();
		return;
	} if (formPages<1 || Math.round(formPages) != formPages) {
		needInfo.classList.remove('hidden')
		event.preventDefault();
		return;
	} if (formReadYes != true && formReadNo != true) {
		needInfo.classList.remove('hidden')
		event.preventDefault();
		return;
	}
	//format title and author name in title case
	formTitle = titleCase(formTitle);
	formAuthor = titleCase(formAuthor);

	//check for duplicate books in library
	for (let book of myLibrary){
		if (formTitle === book.title && formAuthor === book.author){
			dupBook.classList.remove('hidden')
			form.classList.add('hidden')
			event.preventDefault()
			return;
			break;
		}
	} let formRead = false;
	if(formReadYes) {
		formRead = true;
	}
	//allow form data to update database
	let newBook = new Book(formTitle, formAuthor, formPages, formRead);
	newBook.addBookToLibrary();
	libraryShelf.appendChild(createBookCard(newBook))
	event.preventDefault();
	formModal.classList.add('hidden')
});
