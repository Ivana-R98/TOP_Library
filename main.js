
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
function addBookToLibrary(e) {
    e.preventDefault();
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
    let br = document.createElement("br");

    div.classList.add("card");
    readY.setAttribute("type", "checkbox");
    readY.setAttribute("name", "read");
    readY.setAttribute("value", "yes");
    readY.setAttribute("id", "dynamicYes");
    labelY.setAttribute("for", "dynamicYes");
    labelY.innerText = " Read  ";
    readN.setAttribute("type", "checkbox");
    readN.setAttribute("name", "read");
    readN.setAttribute("value", "no");
    readY.setAttribute("id", "dynamicNo");
    labelN.setAttribute("for", "dynamicNo");
    labelN.innerText = " Not yet ";

    title.innerText = "Book:  " + book.title;
    author.innerText = "Author:  " + book.author;
    pages.innerText = "Pages:  " + book.pages;
    read.innerText = "Read:  " + book.read;

    if(book.title === "" || book.author === "") {
        if(book.title === "") alert("Please enter the books name");
        else alert("Please enter the books author");
        return;
    }
    if(book.pages === '') pages.innerText = "Pages: Unknown";

    // create and change checkbox on a card
    readN.addEventListener("click", () => {
        readN.checked = true;
        readY.checked = false;
        book.read = "no";
        read.innerText = " Not read yet ";
        read.style.padding =" 2px";
        div.style.border = "6px solid #d60202";
    })
    readY.addEventListener("click", () => {
        readY.checked = true;
        readN.checked = false;
        book.read = "yes";
        read.innerText = " Read ";
        div.style.border = "6px solid #57c23c";
    })

    if(book.read === "Yes") {
        div.style.border = "6px solid #57c23c";
        readY.checked = true;
    }
    else if (book.read === "No") {
        div.style.border = "6px solid #d60202";
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
    div.appendChild(br);

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
        
        console.log(myLibrary);
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
