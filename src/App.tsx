import React from 'react';
import {TextField} from './TextField';
import {Counter} from './Counter';


function App() {

  

  return (
    <div className="App">
      <TextField text={'Add you name here'}/>
      <Counter>
        {(count,setCount)=> {

          function handleClick (){
            setCount(prevState => prevState + 1)
          }

           return <div>
             {count}
             <button onClick={handleClick}>+</button>
             </div>
        }
         }
      </Counter>
    </div>
  );
}

export default App;
