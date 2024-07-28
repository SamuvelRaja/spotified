import { useGetGenreQuery,useGetAllGenreQuery } from "../redux/slice/shazamapi";
import { Loaderalbum, Loaderlabel } from "../components/Loader";
import Error from "../components/Error";
import Label from "../components/label";
import ArtistCard from "../components/ArtistCard";
import { labels } from "../assets/constants";
import { useState, useEffect } from "react";

const Discover = () => {
    // Fetch genre list data
    const { data: genreListData, isFetching: isFetchingGenres, error: genresError } = useGetAllGenreQuery();
    console.log(genreListData, "gg");

    // Set initial state for genre query and myList
    const [genreQuery, setGenreQuery] = useState(null);
    const [myList, setMyList] = useState([]);
    const genres = ["Malayalam", "Love", "Tamil", "Charts", "Party", "Pop","Hindi"];

    // Update genre query and myList once the genre list data is fetched
    useEffect(() => {
        if (genreListData) {
            const filteredList = genreListData?.categories?.items.filter((item) => genres.includes(item.name));
            setMyList(filteredList);
            if (filteredList.length > 0) {
                setGenreQuery(filteredList[0]?.id);
            }
        }
    }, [genreListData]);

    // Fetch genre data based on genre query
    const { data: genreData, isFetching: isFetchingGenreData } = useGetGenreQuery(genreQuery, {
        skip: !genreQuery,
    });

    // Handle loading and error states
    // if (isFetchingGenres ) {
    //     return <Loader />
        
    //     };
    if (genresError) return <Error />;
    
return (
    <div className="pt-16 px-6">
        <div className="flex gap-2 mt-4 flex-wrap">
            {myList && myList.length > 0 ? (
                myList.map((item) => (
                <Label
                    key={item.id}
                    name={item.name}
                    value={item.id}
                    query={genreQuery}
                    setQuery={setGenreQuery}
                />
                ))
            ) : (
                <Loaderlabel />
            )}
        </div>
        <div className="flex flex-wrap justify-around  md:justify-between gap-1  rounded-[8px]">
            {genreData && genreData.playlists.items.length > 0 ? (genreData?.playlists.items.map((item,i)=>{
                    return <ArtistCard key={item.id+i} img={item.images[0].url} title={item.name} description={item.description} id={item.id} />
                })):<Loaderalbum/>  
            }
        </div>
    </div>
)
};

export default Discover;
