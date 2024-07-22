

const Label = ({name,value,query,setQuery}) => {
  return (
    <button
    onClick={()=>{setQuery(value)}}
    className={`rounded-3xl  py-2 px-4 text-[14px] font-thin ${query==value?'bg-white text-black':'bg-tertiary-bg text-white'}`}
    >
        {name}
    </button>
  )
}

export default Label
