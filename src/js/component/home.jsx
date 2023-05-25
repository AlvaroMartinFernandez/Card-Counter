
import React, { useState, useEffect } from 'react';

function Home() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador((prevContador) => (prevContador + 1) % 1000000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const contadorString = contador.toString().padStart(6, '0');

  return (
    <div>
      {contadorString.split('').map((digito, index) => (
        <Card key={index} props ={digito} />
      ))}
    </div>
  );
}
};

export default Home;
