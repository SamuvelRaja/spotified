import { useGetPlaylistQuery,useGetTrackQuery } from "../redux/slice/shazamapi"
import { useParams } from 'react-router-dom';
import spotify from "../assets/spotify.svg"

const Tracks = () => {
    const{id}=useParams()
    const{data, isFetching, error}=useGetPlaylistQuery(id)
    // const{data:trackData, isFetching:isTrackFetching, error:isTrackError}=useGetTrackQuery(id)
    console.log(data,"playlists")
    // console.log(trackData,"trackData")

    
  return (
    <div className="p-6">
      <div className="flex gap-4 items-end h-[232px]">
        <div>
          <img src={data?.images[0]?.url} className="min-w-[190px] rounded-md"  width={"232px"} height={"232px"} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="mt-6 text-[14px] font-thin text-[#ffffffb2]">Playlist</p>
          <h1 className="mt-2 text-[32px] lg:text-[72px] w-full xl:text-[96px] font-spotifyTitle whitespace-nowrap truncate">{data?.name}</h1>
          <p className="mt-0 text-[14px] font-thin text-[#ffffffb2]">{data?.description}</p>
          <div className="mt-4 flex">
            <span>
              <img src={spotify} alt="" className=" w-[24px] h-[24px]" /> 
            </span>
            <p className=" text-[14px] font-light">
              <b> Spotify</b> . {data?.followers.total} Saves . {data?.tracks?.total}songs
            </p>
            <span>about</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracks
