
let myCar: string; 
let engine: number; 
let isFast: boolean; 
let myName: any;
// or let myName; the default is any 
let cars: string[] = ['Toyota', 'BMW', 'Mercedes'];
let carsAny: any[] = ['Toyota', 200 , 'Mercedes'];
let carsNumber: number[] = [22, 23, 24];

myCar ='Mercedes'; 
engine = 5.4; 
isFast = true;
myName='nina';

function cal(num1: number,num2: number) {
    let total: number = num1 + num2;
    return total;
}
// the last :number means that the function should also return a number. 
cal(2,2)