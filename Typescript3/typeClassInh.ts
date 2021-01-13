class Building{
     constructor(public direction:string){
         this.direction=direction;
     }
    stairs(){
        console.log(`The escalator is moving to the ${this.direction}`)
    }
}

let myBuilding = new Building('left');
myBuilding.stairs();  

class Building2 extends Building{
    //Here I will override the method
    stairs(){
        console.log(`The escalator is moving to the ${this.direction}`)
    }
}

let myBuilding2 = new Building2('right'); 
myBuilding2.stairs();  

////////

class Person{
    constructor(public nm: string, public id:number){
        this.nm=nm; 
        this.id=id;
    }
    public getDetails(){
        return(`${this.nm}: ${this.id}`)
    }
}

let bob= new Person('Bob', 123); 
console.log(bob.getDetails());

//I can also write: 

let PersonP = function(nm1: string, id1: number){
    this.nm1=nm1; 
    this.id1=id1; 
}
PersonP.prototype.getDetails1= function(){
    return (`${this.nm1}: ${this.id1}`)
}

let sam= new PersonP('Sam', 321); 
console.log(sam.getDetails1());
