import { useGetGenreQuery } from "../redux/slice/shazamapi";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Discover = () => {
    //const{data, isFetching, error}=useGetGenreQuery('pop')
    
    // if(isFetching) return <Loader/>;
    // if(error) return <Error/>;
    // console.log(data)

return (
    <div>
        categories
    </div>
)
};

export default Discover;
