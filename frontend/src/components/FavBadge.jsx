import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ navAtLeastOneFavCheck }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={!!navAtLeastOneFavCheck} />
    </div>
  );
};

export default FavBadge;
