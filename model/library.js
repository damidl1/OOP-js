class Library{
    
   constructor(publications = []){   // inizializziamo di default anche un array vuoto nel caso non dovessimo passare nessun parametro
         
     this.publications = publications;  // publications perchè una raccolta di magazine ad esempio e book
   } 

   addPublication(pub){
    this.publications.push(pub)       // per aggiungere una pubblicazione
   }

   deletePublication(index){  // questa funzione sostituisce le publication che hanno i diverso da index
      this.publications = this.publications.filter((_, i) => i !== index);  // per filtrare e rimuovere una publication, underscore per dire che quel parametro non lo usiamo (tipo pub in questo caso)
     // this.publications.splice(index, 1);  // altro metodo per eliminare una pubblicazione, passa indice e quanti elementi eliminare
   
    }
}