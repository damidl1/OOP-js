

class Magazine extends Publication{

    constructor(title, dop, publisher, issue){

      super(title, dop, publisher);
        this.issue = issue;
    }

    
    toString() {        
        const card = super.toString() + 'Numero uscita: ' + this.issue + '\n';
        return card;
      } 

}
