import { useGetPlaylistQuery,useGetTrackQuery } from "../redux/slice/shazamapi"
import { Link, useParams } from 'react-router-dom';
import spotify from "../assets/spotify.svg"
import { useEffect, useState } from "react";
import getImagePrimaryColor from "../assets/utility/scrapeColor";
import miniPlay from '../assets/miniplay.svg'
import plus from '../assets/plus.svg'
import time from '../assets/time.svg'

const Tracks = () => {
    const{id}=useParams()
    const{data, isFetching, error}=useGetPlaylistQuery(id)
    // const{data:trackData, isFetching:isTrackFetching, error:isTrackError}=useGetTrackQuery(id)
    console.log(data,"playlists")
    const[primaryColor, setPrimaryColor]=useState({primary1:"transparent",primary2:'rgb(0,0,0)'})
    
    useEffect(() => {
    async function callColor() {
      if (data?.images?.[0]?.url) {
        const imageUrl = data.images[0].url;
        console.log(imageUrl, "iurl");  
        if(imageUrl!=undefined){
            const pColor = await getImagePrimaryColor(imageUrl);
            const color = pColor;
            const alpha = 0.80;
            const lastCommaIndex = color.lastIndexOf(')')-2;
            const newColor = color.slice(0, lastCommaIndex) + `, ${alpha})`;
            setPrimaryColor({primary1:pColor,primary2:newColor});
            console.log('Primary color in RGB:', primaryColor);
        }
        
      }
    }

    callColor();
  }, [data]);

  console.log(data, "playlists");

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
console.log('Primary color in RGB:', primaryColor);
  return (
        <div>
          <div className="px-6 pt-20 pb-[60px] rounded-t-md" style={{background:primaryColor.primary1}}>
            <div className="flex gap-4 items-end h-[232px]">
              <div>
                <img src={data?.images[0]?.url} className="min-w-[190px] rounded-md"  width={"232px"} height={"232px"} alt="" />
              </div>
              <div className="flex flex-col">
                <p className="mt-6 text-[14px] font-thin text-[#ffffffb2]">Playlist</p>
                <h1 className="mt-2 pr-6 text-[32px] md:text-[48px] xl:text-[72px] w-full 2xl:text-[96px] font-spotifyTitle whitespace-nowrap truncate">{data?.name}</h1>
                <p className="mt-0 text-[14px] font-thin text-[#ffffffb2]">{data?.description}</p>
                <div className="mt-4 flex items-center">
                  <span>
                    <img src={spotify} alt="" className=" w-[24px] h-[24px] mr-2" /> 
                  </span>
                  <p className=" text-[14px] font-thin">
                    <b className="font-semibold"> Spotify </b> . {data?.followers.total} Saves . {data?.tracks?.total} songs
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          {/* top banner */}
          <div className=" px-6" style={{background:`linear-gradient(180deg, ${primaryColor.primary2} 0%, rgba(18,18,18,0.8953956582633054) 10%)`}}>
              <div className="flex items-center gap-6 py-4">
                  <div className=" rounded-full  w-[48px] h-[48px] flex  items-center justify-center bg-green-h hover:bg-[#3be477]">
                    <img src={miniPlay} alt="icon" className="w-[20px] h-[20px]"  />
                  </div>
                  <div className="w-[26px] h-[26px] border border-1 border-white p-1 rounded-full">
                    <img src={plus} alt="icon" className="w-[16px] h-[16px]" />
                  </div>
                  <div className="text-[24px]">
                    . . .
                  </div>
              </div>
              <div>
                <div className="grid grid-cols-12 border-b border-[#ffffff1a] w-full pb-2">
                  <div className="text-secondary-text text-[14px] font-thin col-span-1 ">#</div>
                  <div className="text-secondary-text text-[14px] font-thin col-span-4 ">Title</div>
                  <div className="text-secondary-text text-[14px] font-thin col-span-3 ">Album</div>
                  <div className="text-secondary-text text-[14px] font-thin col-span-2 ">Date Added</div>
                  <div className=" col-span-2"><img src={time} alt="time icon" className="w-[16px] h-[16px]" /></div>
                </div>
              </div>
              <div className="flex flex-col">
                {
                  data?.tracks?.items?.map((item,i)=>{
                      return <div className="grid grid-cols-12  w-full pb-2">
                              <div className="text-secondary-text truncate text-[14px] font-thin col-span-1 ">{i}</div>
                              <div className="truncate text-[14px] font-thin col-span-4 flex">
                                <img src={item.track.album?.images[2]?.url} alt="" />
                                <div className="flex flex-col">
                                  <p>{item.track.name}</p>
                                  <Link>
                                  {item.track.artists.map((a)=>a.name+" ")}
                                  </Link>
                                </div>
                              </div>
                              <div className="text-secondary-text truncate text-[14px] font-thin col-span-3 ">{item.track.album.name}</div>
                              <div className="text-secondary-text truncate text-[14px] font-thin col-span-2 ">{item.track.album.release_date}</div>
                              <div className="text-secondary-text truncate text-[14px] font-thin col-span-2">{item.track.duration_ms/360}</div>
                            </div>
                  })
                }
              </div>
            </div>
        </div>
  )
}

export default Tracks
