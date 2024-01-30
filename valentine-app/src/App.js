import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: 0,
    left: 75, // Adjust the initial left position as needed
  });

  const handleNoButtonClick = () => {
    // Generate random position within the window
    const newPosition = {
      top: Math.floor(Math.random() * (window.innerHeight - 50)),
      left: Math.floor(Math.random() * (window.innerWidth - 50)),
    };

    setNoButtonPosition(newPosition);
  };

  return (
    <div className="app">
      <h1>Will you be my Valentine?</h1>
      <div className="button-container" style={{ position: 'relative' }}>
        <button className="yes-button" onClick={() => alert('Yes clicked!')}>
          Yes
        </button>
        <button
          className="no-button"
          onClick={handleNoButtonClick}
          style={{
            position: 'absolute',
            top: `${noButtonPosition.top}px`,
            left: `${noButtonPosition.left}px`,
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default App;
