import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavBadge = ({ navAtLeastOneFavCheck, favoritesArrayCount }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={!!navAtLeastOneFavCheck} favoritesArrayCount={favoritesArrayCount} />
    </div>
  );
};

export default FavBadge;
