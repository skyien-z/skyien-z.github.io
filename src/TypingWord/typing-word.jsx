import React, { useState, useEffect } from 'react';
import './typing-word.css'; // Import the CSS file

const TypingWord = ({ word }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset currentIndex whenever the word prop changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [word]);

  useEffect(() => {
    // Function to simulate typing effect
    const typingInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < word.length) {
          return prevIndex + 1;
        } else {
          return prevIndex;
        }
      });
    }, 100); // Adjust the interval (in milliseconds) to control the typing speed

    // Clean up the interval when the component unmounts
    return () => clearInterval(typingInterval);
  }, [word]);

  // Get the letters of the word up to the current index
  const typedLetters = word.slice(0, currentIndex);

  return (
    <span>
      {typedLetters}
      { (currentIndex < word.length) ? <span className="blinking-cursor"></span> : <></>}
    </span>
  );
};

export default TypingWord;
