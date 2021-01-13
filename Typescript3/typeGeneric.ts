function displayData(someData: number | string){
    return someData; 
}

console.log(displayData('Hello string parameters'));

//generic function

function displayData1<TYPE>(someData: TYPE){
    return someData; 
}
//the input will define the type of the parameter
console.log(displayData1(1234));

//making a generic class with TeYP1 and TYPE2
class genericClass<TYPE1, TYPE2>{
      constructor(public value1: TYPE1, public value2: TYPE2){

      }
}

let obj1 = new genericClass<string,number>("Hello",1234)
let obj2 = new genericClass<string,boolean>("Hello",true)

//With I want to restrict type1 and type2
class genericClass2<TYPE1, TYPE2 extends string>{
    constructor(public value1: TYPE1, public value2: TYPE2){

    }
}

let obj11 = new genericClass2("Hello","Hello 2")
