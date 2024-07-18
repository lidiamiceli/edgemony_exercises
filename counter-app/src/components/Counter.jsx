import React, { useState } from 'react';
import './Counter.css'; 

function Counter() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`counter-container ${theme}`}>
      <h1>G0 !!</h1>
      <h2> ▶︎ {count} ◀︎ </h2>
     
      <div className="button-container">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div className="button-container">
      <button onClick={reset}>Reset</button>
      </div>
      <div className={`app ${theme}`}>
    
      <button className="button-theme" onClick={toggleTheme}>
      {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </div>
    </div>
  );
}

export default Counter;
