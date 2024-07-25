import { useGetPlaylistQuery,useGetTrackQuery } from "../redux/slice/shazamapi"
import { useParams } from 'react-router-dom';
import spotify from "../assets/spotify.svg"
import { useEffect, useState } from "react";
import getImagePrimaryColor from "../assets/utility/scrapeColor";


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
                    <b> Spotify </b> . {data?.followers.total} Saves . {data?.tracks?.total} songs
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
          <div className=" px-6" style={{background:`linear-gradient(180deg, ${primaryColor.primary2} 0%, rgba(18,18,18,0.8953956582633054) 30%)`}}>
              <div className="flex flex-col">
                {
                  data?.tracks?.items?.map((item)=>{
                      return <div className="py-4">{item.track.name} </div>
                  })
                }
              </div>
            </div>
        </div>
  )
}

export default Tracks
