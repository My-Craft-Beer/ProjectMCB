const AreaItem = ({

    livearea_id,
    livearea_img,
    livearea_descript,
    onClick,
    isSelected,

  }) => {
    return (
      <div 
      onClick={() => onClick(livearea_id)} 
      className={[
      "AreaItem", 
      isSelected ? `AreaItem_on_${livearea_id}` : `AreaItem_off`
      ].join(" ")}
      >
        <img src={livearea_img} />
        <span>{livearea_descript}</span>
      </div>
    );
  };
  
  export default AreaItem;
  