import { useGetGenreQuery,useGetPlaylistQuery } from "../redux/slice/shazamapi";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Label from "../components/label";
import ArtistCard from "../components/ArtistCard";
import { labels } from "../assets/constants";
import { useState } from "react";

const Discover = () => {
    //const{data, isFetching, error}=useGetPlaylistQuery('POP')
    const[genreQuery, setGenreQuery]=useState("POP")
    const{data, isFetching, error}=useGetGenreQuery(genreQuery)
    console.log(data)
    if(isFetching) return <Loader/>;
    if(error) return <Error/>;
    

return (
    <div>
        <div className="flex gap-2 mt-4">
            {
                labels.map((item)=>{
                    return <Label key={item.name} name={item.name} value={item.value} query={genreQuery} setQuery={setGenreQuery}/>
                })
            }
        </div>
        <div className="flex flex-wrap gap-1  rounded-md">
            {
                data.categories.items.map((item)=>{
                    return <ArtistCard key={item.id} img={item.icons[0].url} title={item.name} description={""} />
                })
            }
        </div>
    </div>
)
};

export default Discover;
