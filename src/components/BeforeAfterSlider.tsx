import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  beforeAlt = "Before", 
  afterAlt = "After",
  className = ""
}: BeforeAfterSliderProps) => {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Before Image (Left side) */}
      <div 
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)`
        }}
      >
        <img 
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* After Image (Right side) */}
      <div 
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 0 0 ${sliderValue[0]}%)`
        }}
      >
        <img 
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-80 max-w-[90%]">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="flex justify-between text-white text-sm mb-2">
            <span className="font-medium">VOOR</span>
            <span className="font-medium">NA</span>
          </div>
          <Slider
            value={sliderValue}
            onValueChange={setSliderValue}
            max={100}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="text-center text-white/80 text-xs mt-2">
            Sleep om het verschil te zien
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 pointer-events-none"
        style={{
          left: `${sliderValue[0]}%`,
          transform: 'translateX(-50%)'
        }}
      />
      
      {/* Divider Handle */}
      <div 
        className="absolute top-1/2 w-8 h-8 bg-white rounded-full shadow-lg z-10 flex items-center justify-center pointer-events-none"
        style={{
          left: `${sliderValue[0]}%`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-4 h-4 border-2 border-gray-400 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;