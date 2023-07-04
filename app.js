


// const book1 = {
//     title: 'iliade',
//     author: 'omero',
//     dop: '27/12/2009',    //date of publication
//     publisher: 'einaudi',
// }



const book2 = new Book('odissea', 'omero', '27/12/2010', 'einaudi');

const book3 = new Book('la divina commedia', 'dante', '27/02/1998', 'feltrinelli');

// console.log(book1);
// console.log(book2);


// console.log(book1.title);
// console.log(book2.title);


// console.log(book1['author']);
// console.log(book2['author']);





// console.log(book2 + '');  // si può anche scrivere così senza passare il nome della funzione in console aggiungendo solo una stringa vuota 
// console.log(book3 + '');


// console.log(book3.getUpperTitle());  // per loggare autore in maiuscolo con funzione definita in book



const magazine1 = new Magazine('opera oggi', '12/06/2023', 'fabbri editore', 23);

// console.log(magazine1.toString());

// console.log(magazine1.getUpperTitle());


// CLASSE ASTRATTA ----------------------------------------------

// const pub1 = new Publication('pubblicazione1', '12/06/2020', 'fabbri');

// console.log(pub1.toString());
// console.log(pub1.getUpperTitle());



const schoolBook1 = new SchoolBook('storia di ieri', 'alberto angela', '03/07/2023', 'mondadori', 'storia', '4s');
 
// console.log(schoolBook1.toString());

// console.log(schoolBook1.getUpperTitle());



// GESTIRE TIPI DIVERSI --------------------------

// const libraryCollection = [book2, book3, magazine1, schoolBook1];  // sono tutti tipi diversi ma hanno un parente in comune 


// for (const pub of libraryCollection) {     // finchè gli oggetti hanno un genitore in comune posso gestirli in uno stesso array, si dice polimorfismo
//    console.log(pub.toString());
// }



const library1 = new Library([book2, book3, magazine1, schoolBook1]);  // creiamo oggetto library

library1.deletePublication(3); // per eliminare elemento a indice 3, (schoolBook1)

const book4 = new Book('se questo è un uomo', 'primo levi', '12/05/1998', 'adephi');  // creiamo un nuovo book

library1.addPublication(book4);

console.log(library1);

const gui = new GUI();

gui.start();