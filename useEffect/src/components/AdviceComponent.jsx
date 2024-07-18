import React, { useState, useEffect } from 'react';

const AdviceComponent = () => {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState(null);
  const [counter, setCounter] = useState(0);

  // chiamata solo al primo render del componente
  useEffect(() => {
    console.log('chiamata API solo al primo render');
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        console.log('Advice ricevuto:', data.slip.advice);
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      })
      .catch(error => console.error('Errore nella fetch:', error));
  }, []);

  // chiamata al primo render e aggiornamento dello stato nel localstorage
  useEffect(() => {
    console.log('chiamata API e aggiornamento local storage al primo render');
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        console.log('advice salvato nel local storage:', data.slip.advice);
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
        localStorage.setItem('advice', data.slip.advice);
        localStorage.setItem('adviceId', data.slip.id);
      })
      .catch(error => console.error('Errore nella fetch:', error));
  }, []);

  // 3. Chiamata quando lo stato cambia
  useEffect(() => {
    if (counter > 0) {
      console.log(`chiamata API quando il contatore cambia: ${counter}`);
      fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
          console.log('Consiglio ricevuto quando il contatore cambia:', data.slip.advice);
          setAdvice(data.slip.advice);
          setAdviceId(data.slip.id);
        })
        .catch(error => console.error('Errore nella fetch:', error));
    }
  }, 
  [counter]);

  // chiamata periodica
  useEffect(() => {
    console.log('chiamata API ogni 10 secondi');
    const intervalId = setInterval(() => {
      fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
          console.log('advice ricevuto dopo 10sec:', data.slip.advice);
          setAdvice(data.slip.advice);
          setAdviceId(data.slip.id);
        })
        .catch(error => console.error('Errore nella fetch:', error));
    }, 5000);

    return () => clearInterval(intervalId);
  }, 
  []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center max-w-md">
        <h2 className="text-green-500 text-sm mb-2">ADVICE #{adviceId}</h2>
        <p className="text-xl mb-4">"{advice}"</p>
        <div className="flex justify-center">
          <button className="bg-green-500 p-2 rounded-full" onClick={() => setCounter(counter + 1)} >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12 6.628 0 12-5.372 12-12C24 5.372 18.628 0 12 0zm-.25 18.5h-.5V16h.5v2.5zm1.5 0h-.5V16h.5v2.5zm0-4h-2.5v-2.5h2.5V14.5z" />
            </svg>
          </button>
        </div>
        <div className="text-gray-400 mt-4">
          <p>Counter: {counter}</p>
        </div>
      </div>
    </div>
  );
};

export default AdviceComponent;

