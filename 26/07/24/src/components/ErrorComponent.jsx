
import React from 'react';

const ErrorComponent = ({ message }) => {
  return (
    <div className="p-6 text-center text-red-600">
      <p>Errore: {message}</p>
    </div>
  );
};

export default ErrorComponent;
