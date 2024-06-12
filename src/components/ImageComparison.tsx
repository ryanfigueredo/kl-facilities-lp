import React, { useRef, useEffect } from 'react';

const ImageComparison = () => {
  const beforeRef = useRef<HTMLImageElement>(null);
  const sliderRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleSliderInput = () => {
      const value = sliderRef.current?.value;
      if (beforeRef.current && value !== undefined) {
        beforeRef.current.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
      }
    };

    sliderRef.current?.addEventListener('input', handleSliderInput);
    return () => {
      sliderRef.current?.removeEventListener('input', handleSliderInput);
    };
  }, []);

  return (
    <div className="relative w-full h-96">
      <img src="to/1befor.jpg" alt="After" className="absolute rounded-lg top-0 left-0 w-full h-full object-cover" />
      <img src="to/1.jpg" alt="Before" ref={beforeRef} className="absolute rounded-lg top-0 left-0 w-full h-full object-cover" />
      <input 
        type="range" 
        min="0" 
        max="100" 
        defaultValue="50" 
        ref={sliderRef}
        className=" absolute appearance-none w-full h-full bg-none opacity-0 rounded-lg outline-none focus:outline-none transition  "
        onChange={(e) => console.log(e.target.value)}
        style={{
          width: '100%',
          height: '100%',
          transition: ' opacity-0 .2s',
        }}
      />      
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 50px;
          height: 50px;
          background: url('/svg/arrow-right.svg') no-repeat center;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default ImageComparison;
