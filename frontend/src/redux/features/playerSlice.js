import { createSlice, current } from '@reduxjs/toolkit';

const initialState={
    allSongs:[],
    song:null,
    currentTime:0,
    isPlaying:false,
    trackIndex:null
}

export const songSlice=createSlice({
    name:'song',
    initialState,
    reducers:{
        setSong:(state,action)=>{
            const{songs,i}=action.payload
            state.allSongs=songs
            state.song=songs[i].track
            state.isPlaying=true
            state.trackIndex=i
        },
        play:(state)=>{
            state.isPlaying=!state.isPlaying
        },
        next:(state)=>{
            console.log(state.allSongs.length-1>state.trackIndex,state.allSongs.length-1,"nnn",state.trackIndex)
            if(state.allSongs.length-1>state.trackIndex){
                state.song=state.allSongs[state.trackIndex+1].track
                state.trackIndex=state.trackIndex+1
            }
        },
        previous:(state)=>{
            if(state.trackIndex>0){
                state.song=state.allSongs[state.trackIndex-1].track
                state.trackIndex=state.trackIndex-1
            }
        }
    }
})

export const{setSong,play,next,previous}=songSlice.actions
export default songSlice.reducer