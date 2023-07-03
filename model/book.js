
                                    // extends significa che la classe book è figlia della classe publication
class Book extends Publication{    // abbiamo creato lo stampino per poi generare oggetti di tipo libro
    
  constructor(title, author, dop, publisher){       // dice di cosa ha bisogno il libro per essere costruito

      super(title, dop, publisher);  // il genitore gestisce le proprietà in comune e book gestisce soltanto author perchè è una sua caratteristica
      this.author = author;          // super richiama il costruttore genitore
     
   
   } 


    toString() {        // funzione per scrivere la scheda di un libro nella console, i metodi delle classi non richiedono la parola function all'inizio
    
        const card = super.toString() + 'Autore: ' + this.author + '\n';
        return card;
  } 

}



