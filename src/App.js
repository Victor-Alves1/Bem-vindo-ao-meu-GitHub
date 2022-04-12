import React, {useState} from 'react';

import './App.css';

function App() {
  const str = ('Olá mundo');

  const [InputData, setInputData] = useState() 

  function handleonClick(){
    const data = document.getElementById("InputData")
    setInputData(data.value)
    }

  return (
    <div>
          <div className='Interno'>
            <h2>{str} {InputData}</h2>
      
            <input placeholder='Digite seu nome' id="InputData" type={'text'}></input>
                <button onClick={handleonClick}>
                    Clique aqui
                </button>
          </div>
    </div>
    
  );
}
export default App;