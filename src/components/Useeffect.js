import React, { useEffect, useState } from 'react';

const ColorfulHeading = () => {
  const colors = ['red', 'blue', 'green', 'purple', 'orange'];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <h2 style={{ color: colors[colorIndex] }}>Loading...</h2>
    </div>
  );
};

export default ColorfulHeading;