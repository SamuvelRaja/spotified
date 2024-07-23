import { useGetGenreQuery,useGetPlaylistQuery } from "../redux/slice/shazamapi";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Label from "../components/label";
import ArtistCard from "../components/ArtistCard";
import { labels } from "../assets/constants";
import { useState } from "react";

const Discover = () => {
    //const{data, isFetching, error}=useGetPlaylistQuery('POP')
    const{data, isFetching, error}=useGetGenreQuery('POP')
    const[genreQuery, setGenreQuery]=useState("POP")
    if(isFetching) return <Loader/>;
    if(error) return <Error/>;
    console.log(data.items,data.items[0].snippet.title)

return (
    <div>
        <div className="flex gap-2 mt-4">
            {
                labels.map((item)=>{
                    return <Label key={item.name} name={item.name} value={item.value} query={genreQuery} setQuery={setGenreQuery}/>
                })
            }
        </div>
        <div className="flex flex-wrap gap-1 mt-8 rounded-md">
            {
                data.items.map((item)=>{
                    return <ArtistCard key={item.id.videoId} img={item.snippet.thumbnails.medium.url} title={item.snippet.title} description={item.snippet.description} />
                })
            }
        </div>
    </div>
)
};

export default Discover;
