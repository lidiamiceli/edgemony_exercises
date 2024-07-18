import React, { useState } from 'react';
import './Generator.css';


function NumberGen() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 10000) + 1; // Genera un numero tra 1 e 100
    setRandomNumber(number);
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button className="btn-gen" onClick={generateRandomNumber} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Genera Numero
      </button>
      {randomNumber !== null && (
        <h2 style={{ marginTop: '20px' }}>  {randomNumber}</h2>
      )}
    </div>
  );
}

export default NumberGen;
