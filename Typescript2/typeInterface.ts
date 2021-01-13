interface Automobile{
    brand: string; 
    speed: number; 
    speedMethod(potential: number): void;
}

const automobile: Automobile = {
    brand: 'Audi', 
    speed: 200,
    speedMethod(){
        console.log(`this brand: ${this.brand} goes at ${this.speed} km/h`)
    }
}

const automobile2: Automobile = {
    brand: 'BMW', 
    speed: 220,
    speedMethod(){
    
    }
}

function myCar(automobileType){
    //inside the function I can override the type of the props
    automobileType.speed='200 km/h';
    console.log(`this brand: ${automobileType.brand} goes at ${automobileType.speed}`)
}

//to avoid the override:
function myCar2(automobileType: Automobile){
    automobileType.speed=200;
    console.log(`this brand: ${automobileType.brand} goes at ${automobileType.speed} km/h`)
}


// interface in classes
class AutomobileClass implements Automobile{
    brand:string; 
    speed: number; 
    speedMethod(speed){
        console.log(`My car is going at ${speed}`)
    }
    
}

let carObject = new AutomobileClass(); 

carObject.speedMethod(230);

//Interface inheritance

interface Automobile2 extends Automobile{
    //the question mark makes this prop optional.
  color?:string;
}

const automobile3: Automobile2 = {
    brand: 'BMW', 
    color: 'black',
    speed: 220,
    speedMethod(){
        console.log(`this brand: ${this.brand} goes at ${this.speed} km/h, and it is ${this.color}`);
    }
}