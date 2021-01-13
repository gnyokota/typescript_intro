//In javascript: 
var myNameSpace = (function(){
    console.log("Hello"); 
})

myNameSpace();

var myNameSpace2 = (function(){
    return{
        displayData: function(){
            console.log('This is a deep space')
        }
    };
})();

myNameSpace2.displayData();

//in typescript;
namespace myNameSpace3{
    function displayData2(){
        console.log("Hi my name is Giovana")
    }
}