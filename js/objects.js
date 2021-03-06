(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {
        firstName: "Kenyon",
        lastName: "Luce",
        sayHello: function(){
            return "Hello from " + this.firstName + ' ' + this.lastName
        }
    }
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello())

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ]

    shoppers.forEach(function(shopper){ //shoppers and shopper aren't the same, shoppers is the array while shopper is a parameter within the forEach function, shopper has to stay consistent in this function so that shoppers array can pass into it
        if(shopper.amount > 200) {
            var discount = .12
            var totalAfterDiscount = shopper.amount - (shopper.amount * discount)
            console.log("Hey " + shopper.name + ", you qualify for our 12% discount! Instead of paying $" + shopper.amount + " you now pay $" + totalAfterDiscount.toFixed(2) + "!")
        } else {
            console.log("Hey " + shopper.name + ", that will be $" + shopper.amount + " please! ")
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
        {title:'Scott Pilgrim', author: {firstName:"Bryan", lastName:"O'Mally"}},
        {title:'Chainsaw Man', author: {firstName:"Tatsuki", lastName: "Fujimoto"}},
        {title:'One Punch Man', author: {firstName:"Yusuke", lastName:"Murata"}},
        createBook("My side of the mountain", "some", "person")
        //added our function that we made below to this array!
        ]
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
        books.forEach(function (book, index) {
            console.log("Book # " + (index + 1));
            console.log("Title: " + book.title);
            console.log("Author: " + book.author.firstName + " " + book.author.lastName);
            console.log("---")
        })
    books.forEach(function(book, index){
        showBookInfo(book, index);
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
// function createBook(input){
//     var title = prompt("What is the title of your book?")
//         var firstName = prompt("What is the author's first name?")
//         var lastName = prompt("What is the author's last name?")
//         var book = {title: title, author: {firstName: firstName, lastName: lastName}}
//     return book;
//     }
    //used three parameters instead and removed prompt because it wasn't asking for that
function createBook(bookTitle, authorFirstName, authorLastName){
    var newBook = {
        title: bookTitle,
        author: {
            firstName: authorFirstName,
            lastName: authorLastName
        }
    }
    return newBook;
}
console.log(createBook("My side of the mountain", "some", "person"));

function showBookInfo(bookObject, bookNumber) {
    console.log("Book # " + (bookNumber + 1));
    console.log("Title: " + bookObject.title);
    console.log("Author: " + bookObject.author.firstName + " " + bookObject.author.lastName);
    console.log("---")
}
})();