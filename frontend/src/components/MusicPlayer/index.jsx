import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetSongQuery } from '../../redux/slice/shazamapi';
import Controls from './Controls';
import Player from './Player';
import Track from './Track';
import VolumeBar from './VolumeBar';
import { Link } from 'react-router-dom';
import { convertMstoMins } from '../../assets/utility';
import { next, play, previous } from '../../redux/features/playerSlice';


const MusicPlayer = () => {
const dispatch=useDispatch()
const data=useSelector((state) => state.song.song)
const isPlaying=useSelector((state) => state.song.isPlaying)
const [repeat, setRepeat]=useState(false)
const [shuffle, setShuffle]=useState(false)

  function handlePlayPause(){
    dispatch(play())
  } 
  function handlePrevSong(){
    dispatch(previous())
  }
  function handleNextSong(){
    dispatch(next())
  }

console.log(data,"sdd")
  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <div className="grid grid-cols-12 items-center justify-center">
        <div className="truncate text-[14px] font-thin  flex gap-4 items-center col-span-3">
        { data? 
          <>
            <img src={data.track.album?.images[2]?.url} alt={data.track.album.name} className="w-[56px] h-[56px] rounded-md" />
            <div className="flex flex-col">
              <p className="text-[14px] font-thin">{data.track.name}</p>
              <Link className="text-[12px] font-thin text-secondary-text">
              {data.track.artists.map((a)=>a.name+",  ")}
              </Link>
            </div>
          </> 
        :" " }
        </div>
        <div className='items-center col-span-4'>
          <Controls isPlaying={isPlaying} repeat={repeat} setRepeat={setRepeat}
           shuffle={shuffle} setShuffle={setShuffle} currentSongs={convertMstoMins(data?.duration_ms||'0000')} 
           handlePlayPause={handlePlayPause} handlePrevSong={handlePrevSong} handleNextSong={handleNextSong}/>
        </div>
        <div className='items-center col-span-3'>

        </div>
      </div>
      <div>

      </div>
     </div>
  );
};

export default MusicPlayer;
