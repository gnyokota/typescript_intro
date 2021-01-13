abstract class People{
    public displayData(){
        console.log('some data')
    }
}

// let person1 = new People; 
// person1.displayData();
//with abstract I can just extends it, but not use it 

class Kids extends People{

}

let child = new Kids; 
child.displayData();