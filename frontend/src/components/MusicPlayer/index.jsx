import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetSongQuery } from '../../redux/slice/shazamapi';
import Controls from './Controls';
import Player from './Player';
import Track from './Track';
import VolumeBar from './VolumeBar';
import { Link } from 'react-router-dom';


const MusicPlayer = () => {
const songData=useSelector((state) => state.song.song)
const isPlaying=useSelector((state) => state.song.isPlaying)
const [repeat, setRepeat]=useState(false)
const [shuffle, setShuffle]=useState(false)
const{data,isFetching,error}=useGetSongQuery(songData?.id,{
  enabled:!!songData?.id
})
console.log(songData,data,"sdd")
  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <div className="grid grid-cols-12 items-center justify-center">
        <div className="truncate text-[14px] font-thin  flex gap-4 items-center col-span-3">
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
        <div className='items-center col-span-4'>

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
