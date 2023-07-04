class Storage{

  constructor(){

  }
   

  saveData(data){
    
    const dataString = JSON.stringify(data);  // qualsiasi cosa passiamo viene trasformata in stringa
    localStorage.setItem('publications', dataString);            // setItem serve per aggiungere un nuovo item in local storage, 
                                                                 //  passiamo nome di quello che vogliamo salvare e diamo la stringa che vogliamo andare a salvare
  }

  loadData(){
    
    const dataString = localStorage.getItem('publications')  // getItem prende la stringa associata a publications

    if (dataString) {
        const data = JSON.parse(dataString);  // se la stringa c'è viene convertita in oggetto json
        return data;
    }
   return null;         // altrimenti se non c'è ritorna null
  }
}

