

class Publication{

    constructor(title, dop, publisher){

        this.title = title;
        
        if (dop === null) {
            this.dop = new Date(); // se null la data diventa quella attuale
        } else if (dop.includes('/')){
               
        const dopArray = dop.split('/');
        const year = parseInt(dopArray[2]);         // con questi codici creiamo una data
        const month = parseInt(dopArray[1]) -1;
        const day = parseInt(dopArray[0]);
        
        this.dop = new Date(year, month, day);
        this.publisher = publisher; 
        } else {
            this.dop = new Date(dop);
        }

    
    }

     toString() {        
        const card = 'Titolo: ' + this.title + '\n' +
                     'Data di pubblicazione: ' + this.dop + '\n' +
                     'Casa editrice: ' + this.publisher + '\n';
                     
        return card;
      } 

      getUpperTitle(){
        const upperTitle = this.title.toUpperCase();
        return upperTitle;
    }
}