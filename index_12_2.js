const books = {
    publishingHouse: "ACT",
    yearOfPublishing: 2020
}

const book1 = Object.create(books);

book1.name = "Prosto Masa";
book1.author = "Boris Akunin";

function bookOutput(book, str){

    for (let key in book) {

        if (key === str) {
            return console.log(true); // у book1 есть свойство, равное значению строки str
        }
    }
    return console.log(false);
}

bookOutput(book1, "publishingHouse");