import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import miniPause from '../../assets/minipause.svg'
import miniPlay from '../../assets/miniplay.svg'

const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong }) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <BsArrowRepeat size={20} color={repeat ? '#1ed760' : 'white'} onClick={() => setRepeat((prev) => !prev)} className="hidden md:block cursor-pointer" />
    {currentSongs?.length && <MdSkipPrevious size={30} color="#FFF" className="cursor-pointer" onClick={handlePrevSong} />}
    {isPlaying ? (
      <div onClick={handlePlayPause} className=" rounded-full  w-[32px] h-[32px] flex  items-center justify-center bg-white">
        <img src={miniPause} alt="icon" className="w-[16px] h-[16px]"  />
      </div>
      ) : (
      <div onClick={handlePlayPause} className=" rounded-full   w-[32px] h-[32px] flex  items-center justify-center bg-white">
        <img src={miniPlay} alt="icon" className="w-[16px] h-[16px]"  />
      </div>
    )}
    {currentSongs?.length && <MdSkipNext size={30} color="#FFF" className="cursor-pointer" onClick={handleNextSong} />}
    <BsShuffle size={20} color={shuffle ? '#1ed760' : 'white'} onClick={() => setShuffle((prev) => !prev)} className="hidden md:block cursor-pointer" />
  </div>
);

export default Controls;
