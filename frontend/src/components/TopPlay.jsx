import left from "/src/assets/leftarr.svg"
import right from "/src/assets/rightarr.svg"
import downl from "/src/assets/download.svg"
import bell from "/src/assets/bell.svg"
import spot from "/src/assets/spotify.svg"
import { useNavigate } from "react-router-dom"

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
  return (
  <div className="flex gap justify-between items-center py-4 px-6">
    <div className="flex gap-3 items-center">
      <div className="rounded-full bg-[#000000b3] cursor-pointer w-[32px] h-[32px] p-2" onClick={()=>backward()}>
        <img src={left} alt="" className="w-[16px] h-[16px]" />
      </div>
      <div className="rounded-full bg-[#000000b3] cursor-pointer w-[32px] h-[32px] p-2" onClick={()=>forward()}>
        <img src={right} alt="" className="w-[16px] h-[16px]" />
      </div>
    </div>
    <div className="flex items-center gap-2">
      <button className="btn-white">Explore Premium</button>
      <button className="btn-black"><img src={downl} alt="" className="w-[16px] h-[16px] inline-flex mr-2" /> Install App</button>
      <div className="rounded-full bg-[#0000008a] w-[32px] h-[32px] p-2"><img src={bell} alt="" className="w-[16px] h-[16px]" /></div>
      <div className="rounded-full bg-[#0000008a] w-[32px] h-[32px] p-1"><img src={spot} alt="" className="w-[24px] h-[24px]" /></div>
    </div>
  </div>
  );
};

export default TopPlay;
