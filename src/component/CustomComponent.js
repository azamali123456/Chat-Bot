import React, { useState, useEffect, useRef } from 'react';

const CustomComponent = ({ triggerNextStep }) => {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input field when component mounts or userInput changes
    inputRef.current.focus();
  }, [userInput]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleButtonClick = () => {
    processUserInput();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      processUserInput();
    }
  };

  const processUserInput = () => {
    // Process user input and trigger the next step based on the value
    if (userInput.trim().toLowerCase().includes('how are you') || 
        userInput.trim().toLowerCase().includes('how are') || 
        userInput.trim().toLowerCase().includes('what about you')) {
      triggerNextStep({ value: '9' });
    } else if (userInput.trim().toLowerCase().includes('fine') || 
               userInput.trim().toLowerCase().includes('i am fine')) {
      triggerNextStep({ value: '10' });
    } else if (userInput.trim().toLowerCase().includes('who are you') || 
               userInput.trim().toLowerCase().includes('your name')) {
      triggerNextStep({ value: '11' });
    } else if (userInput.trim().toLowerCase() === 'yes') {
      triggerNextStep({ value: '7' });
    } else if (userInput.trim().toLowerCase() === 'no') {
      triggerNextStep({ value: '8' });
    } else {
      triggerNextStep({ value: '100' });
    }

    // Clear input field after processing
    // setUserInput('');
  };

  return (
    <div>
      <h5>Do you need anything else?</h5>
      <input
        ref={inputRef}
        type="text"
        value={userInput}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // Handle Enter key press
        readOnly={userInput.length < 0} // Make input read-only only if there is userInput
      />
      <button
        className='p-1 m-1'
        style={{ background:"#6E48AA", color:'white' , border:"none"}}
        onClick={handleButtonClick}
      >
        Submit
      </button>
    </div>
  );
};

export default CustomComponent;
