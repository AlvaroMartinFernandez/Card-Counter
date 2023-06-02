import React, { useState, useEffect } from 'react';
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faPause,faRotateRight,faPlay } from '@fortawesome/free-solid-svg-icons';
import { counter } from '@fortawesome/fontawesome-svg-core';

function Home() {
  
  const [play, setPlay] = useState(true);
  const [input, setInput] = useState('');
  const [backCounter,setBackcounter]=useState(false);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if(backCounter===false && play=== true){
    const interval = setInterval(() => {
      setContador((prevContador) => (prevContador + 1) % 1000000);
    }, 1000);
    return () => clearInterval(interval);
  }
  else if(backCounter===true && play === true && contador>0)
  {   
     const interval = setInterval(() => {
    setContador((prevContador) => (prevContador - 1) % 1000000);
  }, 1000);
  return () => clearInterval(interval);
}
if(backCounter===true && counter=== 0){
  setBackcounter(false);
}

  }, [contador,backCounter,play]);

  const contadorString = contador.toString().padStart(6, '0');

  const handleStop=()=>{
    setPlay((prevPlay)=>!prevPlay);
    
  }

  const handleReset=()=>{
    contador===0?setContador(1):setContador(0);
    setBackcounter(false);
  }
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        setBackcounter((prevBackCounter)=>!prevBackCounter);
        setContador(input); 
        setInput('');
            }
          }
  return (
    <>
    <div className=" row d-flex justify-content-center m-2">
       <input type="number" name="todoList" placeholder="Añadir numero para cuenta atras." className="col-8 form-control" onKeyDown={handleKeyDown} onChange={e => setInput(e.target.value)} value={input} id="validationServer01" />                
      </div>
    <div className=" row d-flex justify-content-center m-2">
		<Card props ={<FontAwesomeIcon icon={faClock} />}/>
      {contadorString.split('').map((digito, index) => (
        <Card key={index} props ={digito} />
      ))}
      <div className ="row d-flex justify-content-center m-2">
      { play===true? <button type="button" onClick={handleStop} className=" col-2 btn btn-primary"><FontAwesomeIcon icon={faPause} /></button>:<button type="button" onClick={handleStop}className="col-2 btn btn-primary"><FontAwesomeIcon icon={faPlay} /></button> }
      <button type="button" onClick={handleReset} className="col-2 btn btn-warning"><FontAwesomeIcon icon={faRotateRight} /></button>
      </div>
    </div>
    </>
  );
};

export default Home;