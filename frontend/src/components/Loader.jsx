import loader from "../assets/loader.svg"

export const Loaderlabel = () => {

  return <>
        {Array.from({ length: 8 }, (_, index) => ( 
        <button
          key={index} 
                  onClick={()=>{setQuery(value)}}
                  className={`rounded-3xl  py-2 px-4 w-[78px] h-[37px]  bg-tertiary-bg `}
                  >
                  </button>
        ))}
        </>
}

export const Loaderalbum = () =>{

  return <>
        {Array.from({ length: 25 }, (_, index) => ( 
        <div
          key={index} className="px-3 pt-2 pb-4 bg-tertiary-bg w-[180px] h-[240px] mt-8 rounded-md  cursor-pointer">
  </div>
        ))}
        </>
} 

export const Loadertracks = () =>{

  return <>
        {Array.from({ length: 38 }, (_, index) => ( 
        <div
          key={index}  className="px-3 pt-2 pb-4 bg-tertiary-bg w-full h-[53px] mt-8  cursor-pointer">
  </div>
        ))}
        </>
} 
