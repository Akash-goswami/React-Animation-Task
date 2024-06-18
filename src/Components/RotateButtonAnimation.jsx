import React, { useState } from 'react';
import { FaSyncAlt } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const ButtonWithRotation = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 1000); // Duration of the animation
  };

  return (
    <div className='flex justify-center my-5'>
         <button
      onClick={handleClick}
      className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-full focus:outline-none"
    >
      <FaSyncAlt
        className={`transform transition-transform duration-1000 ${isRotating ? 'rotate-360' : ''}`}
        style={{
          transform: isRotating ? 'rotate(360deg)' : 'rotate(0deg)',
          transition: 'transform 1s'
        }}
      />
    </button>
    </div>
   
  );
};

export default ButtonWithRotation;
