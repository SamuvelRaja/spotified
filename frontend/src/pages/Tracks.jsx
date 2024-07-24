import { useGetPlaylistQuery } from "../redux/slice/shazamapi"
import { useParams } from 'react-router-dom';

const Tracks = () => {
    const{id}=useParams()
    const{data, isFetching, error}=useGetPlaylistQuery(id)
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default Tracks
