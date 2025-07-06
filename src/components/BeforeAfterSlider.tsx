import React, { useState, useRef, useCallback } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderValue([percentage]);
  }, [isDragging]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderValue([percentage]);
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderValue([percentage]);
  }, [isDragging]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderValue([percentage]);
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full cursor-col-resize select-none ${className}`}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Before Image (Left side) */}
      <div 
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${sliderValue[0]}% 0 0)`
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
          clipPath: `inset(0 0 0 ${100 - sliderValue[0]}%)`
        }}
      >
        <img 
          src={afterImage}
          alt={afterAlt}
          className="w-full h-full object-cover"
        />
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