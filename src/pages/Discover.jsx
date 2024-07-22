import { useGetGenreQuery } from "../redux/slice/shazamapi";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Label from "../components/label";
import { labels } from "../assets/constants";
import { useState } from "react";

const Discover = () => {
    //const{data, isFetching, error}=useGetGenreQuery('pop')
    const[genreQuery, setGenreQuery]=useState("POP")
    // if(isFetching) return <Loader/>;
    // if(error) return <Error/>;
    // console.log(data)

return (
    <div>
        <div className="flex gap-2">
            {
                labels.map((item)=>{
                    return <Label key={item.name} name={item.name} value={item.value} query={genreQuery} setQuery={setGenreQuery}/>
                })
            }
        </div>
    </div>
)
};

export default Discover;
