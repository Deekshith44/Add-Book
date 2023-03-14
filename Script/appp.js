class Book
{
    constructor(title,author,isbn)
    {
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI
{
    addBookToList(book)    //method-1
    {
        const list=document.getElementById('book-list');
        const row=document.createElement('tr');
        row.innerHTML=`
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }
    
    showAlert(message,className)   //Method-2
    {
        const div=document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));

        const container=document.querySelector('.container');
        const form=document.querySelector('#book-form');

        container.insertBefore(div,form);   //means insert the message(it is in div) before the(above the form) 
        setTimeout(function()
        {
            document.querySelector('.alert').remove();
        },3000);
    }

    deleteBook(target)  //method-3
    {
        if(target.className==='delete')
        {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields()
    {
        document.getElementById('title').value="";
        document.getElementById('author').value="";
        document.getElementById('isbn').value="";

    }

}

//EVENT LISTENING

document.getElementById('book-form').addEventListener('submit',function(e){
       //Get a form value

    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const isbn=document.getElementById('isbn').value;

       //Instantinate Book

    const book1=new Book(title,author,isbn);

    //Instantinate UI

    const ui=new UI();

    //validate

    if(title===''||author===''||isbn==='')
    {
        ui.showAlert('Please Enter All the field','error');
    }
    else
    {
        //Add Book to list
        ui.addBookToList(book1);
        ui.showAlert('Book Added successfully','success');

        //clear field
        ui.clearFields();

    }

    e.preventDefault();
   
});

//Event listening for delete

document.getElementById('book-list').addEventListener('click',function(e)
{
    //Instantinate UI
    const ui=new UI();
    //delete book
    ui.deleteBook(e.target);
    ui.showAlert('book Removed','success');
    e.preventDefault();
}
);



