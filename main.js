
const myLibrary = [];
//show books
const books = document.getElementById("library");
const form = document.getElementById("form4Books");

const btn = document.getElementById("createForm");
const submit = document.getElementById("addBook");

btn.addEventListener("click", showForm);
submit.addEventListener("click", addBookToLibrary);

submit.style.display = "none";
form.style.display = "none";


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



// get the book
function addBookToLibrary() {
    const book = new Book(document.getElementById("title").value, 
    document.getElementById("author").value, 
    document.getElementById("pages").value,
    document.querySelector('input[name="read"]:checked').value, 
);

    //create a card for each book
    let div = document.createElement("div");
    let title = document.createElement("p");
    let author = document.createElement("p");
    let pages = document.createElement("p");
    let read = document.createElement("p");
    let readY = document.createElement("input");
    let readN = document.createElement("input");
    let labelY = document.createElement("label");
    let labelN = document.createElement("label");
    let grpRadio = document.createElement("div");

    div.classList.add("card");
    readY.setAttribute("type", "checkbox");
    readY.setAttribute("name", "read");
    readY.setAttribute("value", "yes");
    readY.setAttribute("id", "dynamicYes");
    labelY.setAttribute("for", "dynamicYes");
    labelY.innerText = "Read";
    readN.setAttribute("type", "checkbox");
    readN.setAttribute("name", "read");
    readN.setAttribute("value", "no");
    readY.setAttribute("id", "dynamicNo");
    labelN.setAttribute("for", "dynamicNo");
    labelN.innerText = "Not yet";

    title.innerText = "Book: " + book.title;
    author.innerText = "Author: " + book.author;
    pages.innerText = "Pages: " + book.pages;
    read.innerText = "Read: " + book.read;

    // create and change checkbox on a card
    readN.addEventListener("click", () => {
        readN.checked = true;
        readY.checked = false;
        book.read = "no";
        read.innerText = "Not read yet";
        div.style.backgroundColor = "Red";
    })
    readY.addEventListener("click", () => {
        readY.checked = true;
        readN.checked = false;
        book.read = "yes";
        read.innerText = "Read";
        div.style.backgroundColor = "#27db42";
    })

    if(book.read === "yes") {
        div.style.backgroundColor = "#27db42";
        readY.checked = true;
    }
    else if (book.read === "no") {
        div.style.backgroundColor = "Red";
        readN.checked = true;
    }

    books.appendChild(div);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    div.appendChild(grpRadio);
    grpRadio.appendChild(readY);
    grpRadio.appendChild(labelY);
    grpRadio.appendChild(readN);
    grpRadio.appendChild(labelN);

    //create buttons to remove from the library
    let remove = document.createElement("button");
    remove.innerHTML = "Remove";
    div.appendChild(remove);
    //add the book to the array
    myLibrary.push(book); 

    //check if the book is in library


    //removing
    remove.addEventListener("click", () => { 
        let index = myLibrary.findIndex(ele => 
            ele.title === book.title);
        myLibrary.splice(index, 1);

        books.removeChild(div);
    })
    

    // for styling, to look better
    form.style.display = "none";
    btn.style.display = "block";
    submit.style.display = "none";

    //console
    console.log(myLibrary);
    
}

function showForm () {
    form.style.display = "block";
    btn.style.display = "none";
    submit.style.display = "block";
}
