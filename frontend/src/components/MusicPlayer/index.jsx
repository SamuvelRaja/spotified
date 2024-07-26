import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetSongQuery } from '../../redux/slice/shazamapi';
import Controls from './Controls';
import Player from './Player';
import Track from './Track';
import VolumeBar from './VolumeBar';

const MusicPlayer = () => {
const songData=useSelector((state) => state.song.song)
const{data,isFetching,error}=useGetSongQuery(songData?.id,{
  enabled:!!songData
})
console.log(songData,data)
  return (
    <div className="relative sm:px-12 px-8 w-full flex items-center justify-between">
      <div className="flex-1 flex flex-col items-center justify-center">
       
      </div>
     </div>
  );
};

export default MusicPlayer;
