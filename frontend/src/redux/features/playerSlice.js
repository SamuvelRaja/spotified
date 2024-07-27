import { createSlice, current } from '@reduxjs/toolkit';

const initialState={
    allSongs:[],
    song:null,
    currentTime:0,
    isPlaying:false,
    trackIndex:null,
    searchSongs:[],
    queryText:"",
    songImage:""
}

export const songSlice=createSlice({
    name:'song',
    initialState,
    reducers:{
        setSong:(state,action)=>{
            const{songs,i}=action.payload
            state.allSongs=songs
            state.isPlaying=true
            state.trackIndex=i
            if(songs[i]?.track?.album){
                state.song=songs[i].track
            }else{
                state.song=songs[i]
            }
        },
        setImage:(state,action)=>{
            state.songImage=action.payload
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
        },
        searchAction:(state,action)=>{
            const{songs,query}=action.payload
            state.searchSongs=songs
            state.queryText=query
        }
    }
})

export const{setSong,play,next,previous,searchAction,setImage}=songSlice.actions
export default songSlice.reducer