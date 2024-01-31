import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import angryCatImage from './angry-cat.jpeg';
import happyCatImage from './happy-cat.jpeg';

const App = () => {
  const buttonContainerRef = useRef(null);
  const yesButtonRef = useRef(null);

  const [noButtonAnimation, setNoButtonAnimation] = useState('');
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  const handleYesButtonClick = () => {
    setYesClicked(true);
    setNoClicked(false);
  };

  const handleNoButtonClick = () => {
    // If the animation is already running, do nothing
    if (isAnimationRunning) {
      return;
    }

    // Set the animation state to running
    setIsAnimationRunning(true);

    // Make the "No" button perform a wacky animation
    setNoButtonAnimation('bounce-rotate');

    setNoClicked(true);
    setYesClicked(false); 

    // Reset the animation state after a short delay
    setTimeout(() => {
      setNoButtonAnimation('');

      setIsAnimationRunning(false);
    }, 750);
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

        setNoButtonAnimation('');
        setIsAnimationRunning(false);
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
          onClick={handleYesButtonClick}
          ref={yesButtonRef}
        >
          Yes
        </button>
        <button
          className={`no-button ${noButtonAnimation}`}
          onClick={handleNoButtonClick}
        >
          No
        </button>
      </div>

      {yesClicked && (
        <img
          src={happyCatImage}
          alt="Happy Cat"
          style={{ marginTop: '20px', maxWidth: '100%' }}
        />
      )}

      {noClicked && (
        <img
          src={angryCatImage}
          alt="Angry Cat"
          style={{ marginTop: '20px', maxWidth: '100%' }}
        />
      )}
    </div>
  );
};

export default App;
