import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [noButtonDisabled, setNoButtonDisabled] = useState(false);

  const handleNoButtonClick = () => {
    setNoButtonDisabled(true);
  };

  return (
    <div className="app">
      <h1>Will you be my Valentine?</h1>
      <div className="button-container">
        <button className="yes-button">Yes</button>
        <button className="no-button" onClick={handleNoButtonClick} disabled={noButtonDisabled}>
          No
        </button>
      </div>
    </div>
  );
};

export default App;
