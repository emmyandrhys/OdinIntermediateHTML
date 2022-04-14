let myLibrary = [{title: 'My Side of the Mountain', author: 'Jean Craighead George', pages: 177, read: true, info: "'My Side of the Mountain' by Jean Craighead George, 177 pages, read."},
{title: 'Outdoor School Animal Watching', author: 'Mary Kay Carson', pages: 442, read: false, info:"'Outdoor School Animal Watching' by Mary Kay Carson, 442 pages, not read."},
{title: 'Mary Poppins Comes Back', author: 'P.L. Travers', pages: 312, read: true, info: "'Mary Poppins Comes Back' by P.L. Travers, 312 pages, read."},
{title: 'Mary Poppins Opens the Door', author: 'P.L. Travers', pages: 269, read: true, info: "'Mary Poppins Opens the Door' by P.L. Travers, 269 pages, not read."},
{title: 'Chick Days', author: 'Jenna Woginrich', pages: 128, read: true, info: "'Chick Days' by Jenna Woginrich, 128 pages, read."},
{title: '', author: '', pages: , read: true, info: ''},
{title: '', author: '', pages: , read: true, info: ''},
{title: '', author: '', pages: , read: true, info: ''},
{title: '', author: '', pages: , read: true, info: ''},
];

class Book{
	constructor(title,author,pages,read){
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
		this.info = function () {
			return `'${title}' by ${author}, ${pages} pages, ${this.read? 'read': 'not read'}.`
		}
	}
	addBookToLibrary(){
		let newBook = {title: this.title, author:this.author, pages:this.pages, read:this.read,info:this.info}
		myLibrary.push(newBook);
		return;
	}
};
