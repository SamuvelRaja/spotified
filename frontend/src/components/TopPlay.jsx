import left from "/src/assets/leftarr.svg"
import right from "/src/assets/rightarr.svg"
import downl from "/src/assets/download.svg"
import bell from "/src/assets/bell.svg"
import spot from "/src/assets/spotify.svg"
import Searchbar from "./Searchbar"
import { useLocation, useNavigate } from "react-router-dom"

const TopPlay = () => {
  const navigate=useNavigate()
  //navigate forward on react router
  const forward=()=>{
    navigate(1)
  }
  //navigate backward on react router
  const backward=()=>{
    navigate(-1)
  }

  const location=useLocation()

  return (
  <div className="flex gap justify-between items-center py-4 px-6 w-full">
    <div className="flex gap-2 md:gap-3 items-center">
      <div className="rounded-full bg-[#000000b3] cursor-pointer w-[32px] h-[32px] p-2" onClick={()=>backward()}>
        <img src={left} alt="" className="w-[16px] h-[16px]" />
      </div>
      <div className="rounded-full bg-[#000000b3] cursor-pointer w-[32px] h-[32px] p-2" onClick={()=>forward()}>
        <img src={right} alt="" className="w-[16px] h-[16px]" />
      </div>
      {
        location.pathname=="/search"?<Searchbar/>:''
      }
    </div>
    
    <div className="flex items-center gap-2">
      {
      location.pathname!=="/search"?<>
      <button className="btn-white hidden md:block">Explore Premium</button></>:''
      }
      <button className="btn-black hidden md:block"><img src={downl} alt="" className="w-[16px] h-[16px] inline-flex mr-2" /> Install App</button>
      <div className="rounded-full hidden md:block bg-[#0000008a] w-[32px] h-[32px] p-2"><img src={bell} alt="" className="w-[16px] h-[16px]" /></div>
      <div className={`rounded-full bg-[#0000008a] w-[32px] h-[32px] p-1 ${location.pathname=="/search"?"hidden":''}`}>
        <img src={spot} alt="" className="w-[24px] h-[24px]" />
      </div>
    </div>
  </div>
  );
};

export default TopPlay;
