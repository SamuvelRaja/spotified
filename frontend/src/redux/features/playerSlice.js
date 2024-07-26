import { createSlice, current } from '@reduxjs/toolkit';

const initialState={
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
            const{item,id}=action.payload
            state.song=item.track
            state.isPlaying=true
            state.trackIndex=id
        }
    }
})

export const{setSong}=songSlice.actions
export default songSlice.reducer