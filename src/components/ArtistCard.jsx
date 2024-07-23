const ArtistCard = ({ img, title, description }) => {
  return (
    <div className="px-3 pb-4 hover:bg-tertiary-bg w-[180px] mt-8">
      <img src={img} alt="" />
      <h3 className="mt-2 truncate whitespace-nowrap text-[16px]">{title} </h3>
      <p className="mt-2 truncate whitespace-nowrap text-[14px] font-light text-secondary-text">{description}</p>
    </div>
  );
};

export default ArtistCard;
