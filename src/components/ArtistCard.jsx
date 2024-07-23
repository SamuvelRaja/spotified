const ArtistCard = ({ img, title, description }) => {
  return (
    <div className="px-3 pb-4 hover:bg-tertiary-bg w-[180px]">
      <img src={img} alt="" />
      <h3 className="truncate whitespace-nowrap">{title} </h3>
      <p className="truncate whitespace-nowrap">{description}</p>
    </div>
  );
};

export default ArtistCard;
