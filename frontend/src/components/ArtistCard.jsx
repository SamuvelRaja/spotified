import miniplay from "../assets/miniplay.svg"

const ArtistCard = ({ img, title, description }) => {
  return (
    <div className="px-3 pt-2 pb-4 hover:bg-tertiary-bg w-[180px] mt-8 rounded-md art-cards">
      <div className="relative">
        <img src={img} alt="" className="rounded-[12px]" />
        <div className="absolute right-2 bottom-2 mini-play rounded-full  w-[48px] h-[48px] flex opacity-0 items-center justify-center bg-green-h hover:bg-[#3be477]">
          <img src={miniplay} alt="" className="w-[20px] h-[20px]"  />
        </div>
      </div>
      <h3 className="mt-2 truncate whitespace-nowrap text-[16px]">{title} </h3>
      <p className="mt-2 truncate whitespace-nowrap text-[14px] font-light text-secondary-text">{description}</p>
      
    </div>
  );
};

export default ArtistCard;
