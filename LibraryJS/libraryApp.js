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

const closeBtns = document.querySelectorAll('.close-btn');
closeBtns.forEach((btn)=>{btn.addEventListener('click', (e) => e.target.parentElement.classList.add('hidden'))})
const addBookBtn = document.getElementById('add-book-btn');
const form  = document.getElementById('add-book');
const formModal = document.getElementById('book-form');
const dupBook = document.getElementById('duplicate-book-warning');
const needInfo = document.getElementById('need-info-warning');
addBookBtn.addEventListener('click',()=>formModal.classList.remove('hidden'));
const removalConfirm = document.getElementById('book-removal-warning');


function removeBook(e){
	//book removal confirmation modal
	const confirmRemove = document.getElementById('confirm-remove');
	const cancelRemove = document.getElementById('cancel-remove');
	//get book to be removed
	let targetId = e.target.id;
	let book = e.target.id.substring(6);
	confirmRemove.id = book;

	//if yes, remove book
	confirmRemove.addEventListener('click',function(e){
		confirmBookRemoval();
		let removedBook = document.getElementById(`book-${e.target.id}`);
		removeBook.classList.add('hidden')
	})
	//if no, break
	cancelRemove.addEventListener('click',removalConfirm.classList.add('hidden'))
	confirmRemove.id = 'confirm-remove';
}

function confirmBookRemoval(){
	removalConfirm.classList.add('hidden')
}



//function to create each book card
function createBookCard(book){
	const bookElement = document.createElement('div');
	bookElement.id = `book-${book.idNum}`;
	bookElement.classList.add('book_card');
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
	bookRead.id = `read-${book.idNum}`;
	if (book.read){
		bookRead.innerText = 'Book has been read';
		bookRead.classList.add('read_true');
	}
	else {
		bookRead.innerText = "Book hasn't been read";
		bookRead.classList = 'read_false';
	}
	bookRead.addEventListener('click',function(e){
		let bookId = e.target.id.substring(5);
		if(!myLibrary[bookId][read]){
			this.target.innerText = 'been read';
			this.target.classList.add('read_true');
			this.target.classList.remove('read_false');
			myLibrary[bookId][read] = true;
		}
	});

	const bookRemove = document.createElement('btn');
	bookRemove.classList.add('remove_book');
	bookRead.id = `remove-${book.idNum}`;
	bookRemove.innerText = 'Remove Book';
	// bookRemove.addEventListener('click', function(e){
	// 	//book removal confirmation modal
	// 	const removalConfirm = document.getElementById('book-removal-warning')
	// 	removalConfirm.classList.remove('hidden');
	// 	const confirmRemove = document.getElementById('confirm-remove');
	// 	const cancelRemove = document.getElementById('cancel-remove');
	// 	//get book to be removed
	// 	let targetId = e.target.id;
	// 	let book = e.target.id.substring(6);
	
	// 	//if yes, remove book
	// 	confirmRemove.addEventListener('click',function(){
	// 		removalConfirm.classList.add('hidden')
	// 		let removedBook = document.getElementById(`book-${book}`)
	// 		removeBook.classList.add('hidden')
	// 	})
	// 	//if no, break
	// 	cancelRemove.addEventListener('click',removalConfirm.classList.add('hidden'))
	// })

	bookElement.appendChild(bookTitle);
	bookElement.appendChild(bookAuthor);
	bookElement.appendChild(bookPages)
	bookElement.appendChild(bookRead);
	bookElement.appendChild(bookRemove);

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

//render book tiles to shelf
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
})

const removeBookButtons = document.querySelectorAll('.remove_book');
removeBookButtons.forEach((book)=> book.addEventListener('click', removeBook))
removeBookButtons.forEach((book)=> book.addEventListener('click', ()=>removalConfirm.classList.remove('hidden')))
