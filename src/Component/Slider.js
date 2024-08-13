import React, { useState } from 'react';
import './Slider.css'; 
const Slider = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="slidecontainer">
      <input
        type="range"
        min="1"
        max="100"
        value={sliderValue}
        className="slider"
        id="myRange"
        onChange={handleSliderChange}
      />
     {/* <p>Value: {sliderValue}</p>  Display the current slider value */}
    </div>
  );
};

export default Slider;