import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetSongQuery } from '../../redux/slice/shazamapi';
import Controls from './Controls';
import Player from './Player';
import VolumeBar from './VolumeBar';
import { Link } from 'react-router-dom';
import { convertMstoMins } from '../../assets/utility';
import { next, play, previous } from '../../redux/features/playerSlice';
import Seekbar from './Seekbar';


const MusicPlayer = () => {
  const dispatch=useDispatch()
  const data=useSelector((state) => state.song.song)
  const currentIndex=useSelector((state) => state.song.trackIndex)
  const isPlaying=useSelector((state) => state.song.isPlaying)
  const [repeat, setRepeat]=useState(false)
  const [shuffle, setShuffle]=useState(false)
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);

  function handlePlayPause(){
    dispatch(play())
  } 
  function handlePrevSong(){
    dispatch(previous())
  }
  function handleNextSong(){
    dispatch(next())
  }


  return (
    <div className="relative sm:px-6 px-1 w-full flex items-center justify-between">
      <div className="grid grid-cols-12 items-center justify-center w-full">
        <div className="truncate text-[14px] font-thin  flex gap-4 items-center col-span-4">
        { data? 
          <>
            <img src={data.album?.images[2]?.url} alt={data.album.name} className="w-[56px] h-[56px] rounded-md" />
            <div className="flex flex-col">
              <p className="text-[14px] font-thin">{data.name}</p>
              <Link className="text-[12px] font-thin text-secondary-text">
              {data.artists.map((a)=>a.name+",  ")}
              </Link>
            </div>
          </> 
        :" " }
        </div>
        <div className='flex flex-col col-span-5 items-center'>
          <Controls isPlaying={isPlaying} repeat={repeat} setRepeat={setRepeat}
          shuffle={shuffle} setShuffle={setShuffle} currentSongs={convertMstoMins(data?.duration_ms||'0000')} 
          handlePlayPause={handlePlayPause} handlePrevSong={handlePrevSong} handleNextSong={handleNextSong}/>
          <Seekbar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
          />
          <Player
            activeSong={data?.preview_url||''}
            volume={volume}
            isPlaying={isPlaying}
            seekTime={seekTime}
            repeat={repeat}
            currentIndex={currentIndex}
            onEnded={handleNextSong}
            onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
            onLoadedData={(event) => setDuration(event.target.duration)}
            />
        </div>
        <div className='flex col-span-3 w-full justify-end'>
          <VolumeBar value={volume} min="0" max="1" onChange={(event) => setVolume(event.target.value)} setVolume={setVolume}/>
        </div>
      </div>
      <div>

      </div>
     </div>
  );
};

export default MusicPlayer;
