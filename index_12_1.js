const books = {
    publishingHouse: "ACT",
    yearOfPublishing: 2020
}

const book1 = Object.create(books); // одна из книг издательства АСТ 2020 года

book1.name = "Prosto Masa";
book1.author = "Boris Akunin";

function bookOutput(book){
    for (let key in book) {

        if (book.hasOwnProperty(key)) {

            console.log(key + ': ' + book[key]);
        }
    }
}

bookOutput(book1); // вызов функции, выводящей только свойства книги book1