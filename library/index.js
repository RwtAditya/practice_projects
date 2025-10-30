const library = [];

function showBook(){
    const gridCard = document.querySelector('#books');  
    gridCard.innerHTML = '';
    for(let i = 0; i<library.length; i++){
        const bookDiv = document.createElement('div');

        bookDiv.className = 'book';

        bookDiv.innerHTML = `
            <p>${library[i].title}</p>
            <p>${library[i].author}</p>
            <button >Delete</button>`;
        
        const deleteBtn = bookDiv.querySelector('button');
        deleteBtn.addEventListener('click', () => {
            deleteBook(library[i].id);
        });

        gridCard.appendChild(bookDiv);
    }
}

function deleteBook(bookId){
    for(let i=0; i<library.length; i++){
        if(library[i].id == bookId){
            library.splice(i, 1);
            break;
        }
    }

    showBook();
}

function Book(author, title){
    this.id = crypto.randomUUID();

    this.author = author;
    this.title = title;
}


function addBookToLibrary(author, title){
    let book = new Book(author,title);
    library.push(book);
    showBook();
}

//form for adding book
const dialog = document.querySelector('dialog');
const showButton = document.querySelector('#modelButton');
const closeButton = dialog.querySelector('button');


showButton.addEventListener('click', () => {
    console.log("In showbutton");
    dialog.showModal();
})

closeButton.addEventListener('click', () => {
    console.log("In clsoebutton");
    dialog.close();
})


//adding the book in library
const form = document.querySelector('#myform');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    addBookToLibrary(data.author,data.title);
})


// //deleting book form the library
// const btn = document.querySelector('.books>button');

// btn.addEventListener('submit', (event) => {
//     deleteBook(btn.dataset.bookId);
// })




