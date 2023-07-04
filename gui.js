class GUI{      // Graphical user interface = GUI

    constructor(){
          // ogni volta che si attiva una GUI verrà creata una library vuota
        this.storage = new Storage();
        this.library = new Library();
        const data = this.storage.loadData();

        if (data !== null) {  // se ho dei dati salvati la inizializzo con i dati altrimenti vuoto
            this.library.fromDbObjects(data);
        }
        
    }

    start(){

        while (true) {  // mettiamo while per fare un ciclo infinito così se l'utente sbaglia ad inserire il prompt torna sulla pagina per poter inserire di nuovo i dati
                  const firstChoice = prompt('Hai 4 opzioni:\n' +
                           ' 1)Guarda la lista dei libri\n' +
                           ' 2)Aggiungi un libro\n' +
                           ' 3)Rimuovi un libro\n' +
                           ' 4)Esci dal programma\n' +
                           ' Inserisci il numero dell\'operazione'
                           );
                           
   if (firstChoice === '1'){
      this.showBooks();
   } else if (firstChoice === '2'){
      this.insertBook();
   } else if (firstChoice === '3'){
      this.deleteBook();
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
    const dop = prompt('Inserisci la data di pubblicazione nel formato gg/mm/aaaa');
    const publisher = prompt('Inserisci la casa editrice');

    const book = new Book(title, author, dop, publisher);

    this.library.addPublication(book);
    
    this.storage.saveData(this.library.publications);  // diciamo che ogni volta vogliamo salvare tutto l'array di pubblicazioni quando aggiungiamo un libro
 }

 showBooks(){
    const allBooks = this.library.getAllBookCards();

    alert(allBooks);
 }

 deleteBook(){

    const humanIndex = prompt('Inserisci il numero del libro che vuoi eliminare');
    const index = humanIndex - 1;  // per tornare a indice 0 
    this.library.deletePublication(index);
    this.storage.saveData(this.library.publications); // anche qui diciamo che vogliamo salvare tutto l'array di pubblicazioni quando eliminiamo un libro
 }



}

