import React from 'react';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center w-full">
      
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-full h-[6px] transition-all mx-3 rounded-[0px] border-none outline-none"
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      
    </div>
  );
};

export default Seekbar;
