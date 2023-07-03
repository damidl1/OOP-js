


const book1 = {
    title: 'iliade',
    author: 'omero',
    dop: '27/12/2009',    //date of publication
    publisher: 'einaudi',
}



const book2 = new Book('odissea', 'omero', '27/12/2010', 'einaudi');

console.log(book1);
console.log(book2);


console.log(book1.title);
console.log(book2.title);


console.log(book1['author']);
console.log(book2['author']);

printBookData()