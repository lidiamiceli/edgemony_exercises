import React, { useState } from 'react';

function CharacterCounter() {
  const [text, setText] = useState('');
  const [excludeSpaces, setExcludeSpaces] = useState(false);

  const countCharacters = () => {
    let count = text.length;
    if (excludeSpaces) {
      count = text.replace(/\s+/g, '').length;
    }
    return count;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-4">Character Counter</h1>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="5"
          cols="40"
          placeholder="Insert text here..."
          className="w-full p-2 mb-4 border border-gray-600 rounded"
        />
        <br />
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={excludeSpaces}
            onChange={(e) => setExcludeSpaces(e.target.checked)}
            className="mr-2"
          />
          Exclude spaces
        </label>
        <br />
        <p>The number of characters is: {countCharacters()}</p>
      </div>
    </div>
  );
}

export default CharacterCounter;
