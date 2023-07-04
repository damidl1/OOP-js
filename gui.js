class GUI{      // Graphical user interface = GUI

    constructor(){
        this.library = new Library();  // ogni volta che si attiva una GUI verrà creata una library
    }

    start(){

        while (true) {  // mettiamo while per fare un ciclo infinito così se l'utente sbaglia ad inserire il prompt torna sulla pagina per poter inserire di nuovo i dati
                  const firstChoice = prompt('Hai 4 opzioni:\n' +
                           ' 1)Guarda la lista dei libri\n' +
                           ' 2)Aggiungi un libro\n' +
                           ' 3)Rimuovi un libro\n' +
                           ' 4)Esci dal programma\n' +
                           ' Inserisci il numero dell\'operazione');
                           
   if (firstChoice === '1'){
     
   } else if (firstChoice === '2'){
      
   } else if (firstChoice === '3'){
    
   } else if (firstChoice === '4'){
      break; // per interrompere il programma se si inserisce 4
   } else {
     alert('Hai sbagliato ad inserire l\'opzione');
   }
  }
 }

 insertBook(){
    const title = prompt('Inserisci il titolo');
    const author = prompt('Inserisci l\'autore');
    const dop = prompt('Inserisci la data di pubblicazione');
    const publisher = prompt('Inserisci la casa editrice');

    const book = new Book(title, author, dop, publisher);

    this.library.addPublication(book);
 }
}

