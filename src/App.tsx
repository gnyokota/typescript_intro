import React from 'react';
import {TextField} from './TextField';
import {Counter} from './Counter';


function App() {
  return (
    <div className="App">
      <TextField text={'Add you name here'}/>
      <Counter>
        {(count,setCount)=> {
           return <div>{count}</div>
        }
         }
      </Counter>
    </div>
  );
}

export default App;
