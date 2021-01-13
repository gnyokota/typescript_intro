let car = {

    // the initialized type will be the default type, for example brand will be always string  
    //this is called inference 
    brand: 'BMW', 
    engine: 3.4, 
    run: function(){
        console.log('driving a car')
    }
}

car.brand ='Mercedes';
