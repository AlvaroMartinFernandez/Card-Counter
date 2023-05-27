import React, { useState, useEffect } from 'react';
import Card from './Card'

function Home() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador((prevContador) => (prevContador + 1) % 1000000);
    }, 1000);

    return () => clearInterval(interval);
  }, [contador]);

  const contadorString = contador.toString().padStart(6, '0');

  return (
    <div className=" row d-flex justify-content-center">
		<Card props ={<i className="fa-regular fa-clock"></i>}/>
      {contadorString.split('').map((digito, index) => (
        <Card key={index} props ={digito} />
      ))}
    </div>
  );
};

export default Home;