import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const buttonContainerRef = useRef(null);
  const yesButtonRef = useRef(null);

  const [noButtonShake, setNoButtonShake] = useState(false);

  const handleNoButtonClick = () => {
    // Make the "No" button shake
    setNoButtonShake(true);

    // Reset the shake state after a short delay
    setTimeout(() => {
      setNoButtonShake(false);
    }, 500);
  };

  useEffect(() => {
    // Update button position when the window is resized
    const handleResize = () => {
      const container = buttonContainerRef.current;
      if (container) {
        const newPosition = {
          top: Math.floor(Math.random() * (container.offsetHeight - 50)),
          left: Math.floor(Math.random() * (container.offsetWidth - 50)),
        };

        setNoButtonShake(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app">
      <h1>Will you be my Valentine?</h1>
      <div
        className="button-container"
        style={{ position: 'relative' }}
        ref={buttonContainerRef}
      >
        <button
          className="yes-button"
          onClick={() => alert('Yes clicked!')}
          ref={yesButtonRef}
        >
          Yes
        </button>
        <button
          className={`no-button ${noButtonShake ? 'shake' : ''}`}
          onClick={handleNoButtonClick}
          style={{
            position: 'absolute',
            top: '0',
            left: '75px',
          }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default App;
