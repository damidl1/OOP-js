

class SchoolBook extends Book{

    constructor(title, author, dop, publisher, subject, classroom){
        
        super(title, author, dop, publisher)
        this.subject = subject;
        this.classroom = classroom;
    }
    
    toString() {        
    
        const card = super.toString() + 'Materia: ' + this.subject + '\n' 
                                      + 'Classe: ' + this.classroom + '\n';
        return card;
  } 
}