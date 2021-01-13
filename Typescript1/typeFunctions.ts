//1.functions:
function stringFunction():string{
    return ('Hello I am a string')
}

function cal(num1: number,num2: number):number {
    let total = num1 + num2;
    return total;
}

let universal: ()=>string;
universal = stringFunction; 
console.log(universal());

let universal2: (number1:number, number2:number)=>number;
universal2= cal; 
console.log(universal2(1,2));

//2. objects:

let vehicle ={
    brand: 'Mercedes', 
    engineType: 4.6
}

vehicle.brand ='Audi';

//to avoid default types inside the obj
let vehicleAny: {brand:string, engineType:number} ={
    brand: 'Mercedes', 
    engineType: 4.6
}

vehicleAny.brand = "audi";

//3. Union types: 
let x : [string, number]; 
x=['Hello, I am ', 29];
console.log(x[0] + x[1]); 

let unionType: number | string; 
unionType='my name'; 
unionType=29;
